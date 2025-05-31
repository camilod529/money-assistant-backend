import { ForbiddenException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { Role } from '../../generated/prisma';
import { PrismaClientKnownRequestError } from '../../generated/prisma/runtime/library';
import { baseCategories } from '../config/baseCategories.const';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BookEntity } from './entities/book.entity';

@Injectable()
export class BooksService {
  private readonly logger = new Logger(BooksService.name);

  constructor(private readonly prisma: PrismaService) {}

  async create(userId: string, createBookDto: CreateBookDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) throw new ForbiddenException('User not found');

    const book = await this.prisma.book.create({
      data: {
        ...createBookDto,
        userId,
      },
    });

    await this.prisma.member.create({
      data: {
        bookId: book.id,
        userId: user.id,
        role: Role.ADMIN,
        name: user.username,
      },
    });

    try {
      await this.prisma.category.createMany({
        data: baseCategories.map((category) => ({
          name: category.name,
          type: category.type,
          bookId: book.id,
        })),
        skipDuplicates: true,
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';

      this.logger.error(errorMessage, error);

      if (error instanceof PrismaClientKnownRequestError && error.code === 'P2002') {
        throw new ForbiddenException('Book name already exists');
      }

      throw new InternalServerErrorException(errorMessage);
    }

    const returnBook = new BookEntity({ ...book });

    return returnBook;
  }

  async findAll(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) throw new ForbiddenException('User not found');

    const books = await this.prisma.book.findMany({
      where: {
        members: {
          some: {
            userId,
          },
        },
      },
    });

    const returnBooks = books.map((book) => new BookEntity({ ...book }));

    return returnBooks;
  }

  async findOne(bookId: string, userId: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) throw new ForbiddenException('User not found');

    const membership = await this.prisma.member.findUnique({
      where: {
        bookId_userId: { bookId, userId },
      },
    });

    if (!membership) throw new ForbiddenException('You are not a member of this book');

    const book = await this.prisma.book.findUnique({
      where: {
        id: bookId,
      },
    });

    if (!book) throw new ForbiddenException('Book not found');

    const returnBook = new BookEntity({ ...book });

    return returnBook;
  }

  async update(bookId: string, userId: string, updateBookDto: UpdateBookDto) {
    const membership = await this.prisma.member.findUnique({
      where: {
        bookId_userId: { bookId, userId },
      },
    });

    if (!membership) throw new ForbiddenException('You are not a member of this book');

    const book = await this.prisma.book.findUnique({
      where: {
        id: bookId,
      },
    });

    if (!book) throw new ForbiddenException('Book not found');

    console.log({ membership, book });

    try {
      const updatedBook = await this.prisma.book.update({
        where: {
          id: bookId,
        },
        data: {
          ...updateBookDto,
        },
      });

      const returnBook = new BookEntity({ ...updatedBook });

      return returnBook;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';

      this.logger.error(errorMessage, error);

      if (error instanceof PrismaClientKnownRequestError && error.code === 'P2002') {
        throw new ForbiddenException('Book name already exists');
      }

      throw new InternalServerErrorException(errorMessage);
    }
  }

  async remove(id: string, userId: string) {
    const membership = await this.prisma.member.findUnique({
      where: {
        bookId_userId: { bookId: id, userId },
      },
    });

    if (!membership || membership.role !== Role.ADMIN)
      throw new ForbiddenException('You are not an admin of this book');

    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        books: true,
      },
    });

    if (!user) throw new ForbiddenException('User not found');

    const book = await this.prisma.book.findUnique({
      where: {
        id,
      },
    });

    if (!book) throw new ForbiddenException('Book not found');

    try {
      await this.prisma.member.deleteMany({
        where: {
          bookId: id,
        },
      });

      return this.prisma.book.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';

      this.logger.error(errorMessage, error);

      throw new InternalServerErrorException(errorMessage);
    }
  }
}
