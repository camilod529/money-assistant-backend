import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { AuthPermission } from '../auth/decorators/auth-permission.decorator';
import { GetUser } from '../auth/decorators/get-user.decorator';
import { HasPermission } from '../auth/decorators/has-permission.decorator';
import { UserEntity } from '../auth/entities/user.entity';
import { PERMISSIONS } from '../config/permissions.const';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
@AuthPermission()
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  @HasPermission(PERMISSIONS.BOOK.CREATE)
  create(@GetUser() user: UserEntity, @Body() createBookDto: CreateBookDto) {
    return this.booksService.create(user.id, createBookDto);
  }

  @Get()
  findAll(@GetUser() user: UserEntity) {
    return this.booksService.findAll(user.id);
  }

  @Get(':id')
  findOne(@GetUser() user: UserEntity, @Param('id') bookId: string) {
    return this.booksService.findOne(bookId, user.id);
  }

  @Patch(':id')
  @HasPermission(PERMISSIONS.BOOK.UPDATE)
  update(@Param('id') bookId: string, @GetUser() user: UserEntity, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.update(bookId, user.id, updateBookDto);
  }

  @Delete(':id')
  @HasPermission(PERMISSIONS.BOOK.DELETE)
  remove(@GetUser() user: UserEntity, @Param('id') bookId: string) {
    return this.booksService.remove(bookId, user.id);
  }
}
