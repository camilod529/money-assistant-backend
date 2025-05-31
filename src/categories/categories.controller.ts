import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { AuthPermission } from '../auth/decorators/auth-permission.decorator';
import { HasPermission } from '../auth/decorators/has-permission.decorator';
import { PERMISSIONS } from '../config/permissions.const';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('books/:bookId/categories')
@AuthPermission()
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  @HasPermission(PERMISSIONS.BOOK.MANAGE_CATEGORIES)
  create(@Param('bookId', new ParseUUIDPipe()) bookId: string, @Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.create({ ...createCategoryDto, bookId });
  }

  @Get()
  @HasPermission(PERMISSIONS.BOOK.VIEW_ACCOUNTS)
  findAll(@Param('bookId', new ParseUUIDPipe()) bookId: string) {
    return this.categoriesService.findAll(bookId);
  }

  @Get(':categoryId')
  @HasPermission(PERMISSIONS.BOOK.VIEW_ACCOUNTS)
  findOne(@Param('bookId', new ParseUUIDPipe()) bookId: string, @Param('categoryId') categoryId: string) {
    return this.categoriesService.findOne(bookId, categoryId);
  }

  @Patch(':categoryId')
  @HasPermission(PERMISSIONS.BOOK.MANAGE_CATEGORIES)
  update(
    @Param('bookId', new ParseUUIDPipe()) bookId: string,
    @Param('categoryId') categoryId: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoriesService.update(bookId, categoryId, updateCategoryDto);
  }

  @Delete(':categoryId')
  @HasPermission(PERMISSIONS.BOOK.MANAGE_CATEGORIES)
  remove(@Param('bookId', new ParseUUIDPipe()) bookId: string, @Param('categoryId') categoryId: string) {
    return this.categoriesService.remove(bookId, categoryId);
  }
}
