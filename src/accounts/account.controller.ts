import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, Put } from '@nestjs/common';
import { AuthPermission } from '../auth/decorators/auth-permission.decorator';
import { HasPermission } from '../auth/decorators/has-permission.decorator';
import { PERMISSIONS } from '../config/permissions.const';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

@Controller('books/:bookId/accounts')
@AuthPermission()
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post()
  @HasPermission(PERMISSIONS.BOOK.MANAGE_ACCOUNTS)
  create(@Param('bookId') bookId: string, @Body() createAccountDto: CreateAccountDto) {
    return this.accountService.create(bookId, createAccountDto);
  }

  @Get()
  @HasPermission(PERMISSIONS.BOOK.VIEW_ACCOUNTS)
  async findAll(@Param('bookId', new ParseUUIDPipe()) bookId: string) {
    return this.accountService.findAll(bookId);
  }

  @Get(':accountId')
  @HasPermission(PERMISSIONS.BOOK.VIEW_ACCOUNTS)
  async findOne(
    @Param('bookId', new ParseUUIDPipe()) bookId: string,
    @Param('accountId', new ParseUUIDPipe()) accountId: string,
  ) {
    return this.accountService.findOne(bookId, accountId);
  }

  @Patch(':accountId')
  @HasPermission(PERMISSIONS.BOOK.MANAGE_ACCOUNTS)
  async update(
    @Param('bookId', new ParseUUIDPipe()) bookId: string,
    @Param('accountId', new ParseUUIDPipe()) accountId: string,
    @Body() updateAccountDto: UpdateAccountDto,
  ) {
    return this.accountService.update(bookId, accountId, updateAccountDto);
  }

  @Delete(':accountId')
  @HasPermission(PERMISSIONS.BOOK.MANAGE_ACCOUNTS)
  async remove(
    @Param('bookId', new ParseUUIDPipe()) bookId: string,
    @Param('accountId', new ParseUUIDPipe()) accountId: string,
  ) {
    return this.accountService.remove(bookId, accountId);
  }

  @Put(':accountId/balance')
  @HasPermission(PERMISSIONS.BOOK.MANAGE_ACCOUNTS)
  async updateBalance(
    @Param('bookId', new ParseUUIDPipe()) bookId: string,
    @Param('accountId', new ParseUUIDPipe()) accountId: string,
    @Body() body: { amount: number },
  ) {
    return this.accountService.updateBalance(bookId, accountId, body.amount);
  }
}
