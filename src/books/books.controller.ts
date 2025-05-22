import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Auth } from '../auth/decorators/auth.decorator';
import { GetUser } from '../auth/decorators/get-user.decorator';
import { UserEntity } from '../auth/entities/user.entity';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Auth()
  @Post()
  create(@GetUser() user: UserEntity, @Body() createBookDto: CreateBookDto) {
    return this.booksService.create(user.id, createBookDto);
  }

  @Auth()
  @Get()
  findAll(@GetUser() user: UserEntity) {
    return this.booksService.findAll(user.id);
  }

  @Auth()
  @Get(':id')
  findOne(@GetUser() user: UserEntity, @Param('id') bookId: string) {
    return this.booksService.findOne(bookId, user.id);
  }

  @Auth()
  @Patch(':id')
  update(@Param('id') bookId: string, @GetUser() user: UserEntity, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.update(bookId, user.id, updateBookDto);
  }

  @Auth()
  @Delete(':id')
  remove(@GetUser() user: UserEntity, @Param('id') bookId: string) {
    return this.booksService.remove(bookId, user.id);
  }
}
