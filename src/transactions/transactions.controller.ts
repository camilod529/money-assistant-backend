import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put, Query } from '@nestjs/common';
import { TransactionType } from '../../generated/prisma/index';
import { AuthPermission } from '../auth/decorators/auth-permission.decorator';
import { HasPermission } from '../auth/decorators/has-permission.decorator';
import { PERMISSIONS } from '../config/permissions.const';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { TransactionsService } from './transactions.service';

@Controller('books/:bookId/transactions')
@AuthPermission()
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  @HasPermission(PERMISSIONS.TRANSACTION.CREATE)
  create(@Param('bookId', ParseUUIDPipe) bookId: string, @Body() createTransactionDto: CreateTransactionDto) {
    return this.transactionsService.create(bookId, createTransactionDto);
  }

  @Get()
  @HasPermission(PERMISSIONS.TRANSACTION.VIEW)
  findAll(
    @Param('bookId', ParseUUIDPipe) bookId: string,
    @Query('from') from?: string,
    @Query('to') to?: string,
    @Query('type') type?: TransactionType,
  ) {
    return this.transactionsService.findAll(bookId, {
      from,
      to,
      type,
    });
  }

  @Get(':transactionId')
  @HasPermission(PERMISSIONS.TRANSACTION.VIEW)
  findOne(
    @Param('bookId', ParseUUIDPipe) bookId: string,
    @Param('transactionId', ParseUUIDPipe) transactionId: string,
  ) {
    return this.transactionsService.findOne(bookId, transactionId);
  }

  @Put(':transactionId')
  @HasPermission(PERMISSIONS.TRANSACTION.UPDATE)
  update(
    @Param('bookId', ParseUUIDPipe) bookId: string,
    @Param('transactionId', ParseUUIDPipe) transactionId: string,
    @Body() updateDto: UpdateTransactionDto,
  ) {
    return this.transactionsService.update(bookId, transactionId, updateDto);
  }

  @Delete(':transactionId')
  @HasPermission(PERMISSIONS.TRANSACTION.DELETE)
  remove(@Param('bookId', ParseUUIDPipe) bookId: string, @Param('transactionId', ParseUUIDPipe) transactionId: string) {
    return this.transactionsService.remove(bookId, transactionId);
  }
}
