import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryEntity } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createCategoryDto: CreateCategoryDto) {
    const category = await this.prisma.category.create({
      data: {
        name: createCategoryDto.name,
        bookId: createCategoryDto.bookId,
        type: createCategoryDto.type,
      },
    });

    return new CategoryEntity({ ...category });
  }

  async findAll(bookId: string) {
    const categories = await this.prisma.category.findMany({
      where: {
        bookId,
      },
      orderBy: {
        name: 'asc',
      },
    });

    return categories.map((category) => new CategoryEntity({ ...category }));
  }

  async findOne(bookId: string, categoryId: string) {
    const category = await this.prisma.category.findUnique({
      where: {
        id: categoryId,
        bookId: bookId,
      },
    });

    if (!category) {
      throw new NotFoundException(`Category with ID ${categoryId} not found in book ${bookId}`);
    }

    return new CategoryEntity({ ...category });
  }

  async update(bookId: string, categoryId: string, updateCategoryDto: UpdateCategoryDto) {
    const exists = await this.prisma.category.findUnique({
      where: {
        id: categoryId,
        bookId: bookId,
      },
    });

    if (!exists) {
      throw new NotFoundException(`Category with ID ${categoryId} not found in book ${bookId}`);
    }

    const updated = await this.prisma.category.update({
      where: {
        id: categoryId,
        bookId: bookId,
      },
      data: {
        name: updateCategoryDto.name,
        type: updateCategoryDto.type,
      },
    });

    return new CategoryEntity({ ...updated });
  }

  async remove(bookId: string, categoryId: string) {
    const exists = await this.prisma.category.findUnique({
      where: {
        id: categoryId,
        bookId: bookId,
      },
    });

    if (!exists) {
      throw new NotFoundException(`Category with ID ${categoryId} not found in book ${bookId}`);
    }

    await this.prisma.category.delete({
      where: {
        id: categoryId,
        bookId: bookId,
      },
    });

    return { message: `Category with ID ${categoryId} deleted successfully from book ${bookId}` };
  }
}
