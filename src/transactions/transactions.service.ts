import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, TransactionType } from '../../generated/prisma/index';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { GetTransactionsFiltersDto } from './dto/get-transactions-filter.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { TransactionEntity } from './entities/transaction.entity';

@Injectable()
export class TransactionsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(bookId: string, dto: CreateTransactionDto) {
    const category = await this.validateAccountAndCategoryBelongToBook(bookId, dto.accountId, dto.categoryId);

    const transaction = await this.prisma.transaction.create({
      data: {
        accountId: dto.accountId,
        categoryId: dto.categoryId,
        amount: dto.amount,
        transactionAt: dto.transactionAt,
        description: dto.description,
      },
    });

    const isExpense = category.type === TransactionType.EXPENSE;
    const delta = isExpense ? -dto.amount : dto.amount;

    await this.prisma.account.update({
      where: { id: dto.accountId },
      data: {
        balance: {
          increment: delta,
        },
      },
    });

    return new TransactionEntity(transaction);
  }

  async findAll(bookId: string, filters: GetTransactionsFiltersDto) {
    const { from, to, type } = filters;
    const where: Prisma.TransactionWhereInput = {
      account: { bookId },
    };

    if (type) {
      where.category = { type };
    }

    if (from || to) {
      where.transactionAt = {};
      if (from) where.transactionAt.gte = new Date(from);
      if (to) where.transactionAt.lte = new Date(to);
    }
    if (from && to && new Date(from) >= new Date(to)) {
      throw new ForbiddenException('Invalid date range: "from" date cannot be after "to" date');
    }
    const transactions = await this.prisma.transaction.findMany({
      where,
      orderBy: { transactionAt: 'desc' },
    });

    return transactions.map((t) => new TransactionEntity(t));
  }

  async findOne(bookId: string, transactionId: string) {
    const transaction = await this.prisma.transaction.findFirst({
      where: {
        id: transactionId,
        account: { bookId },
      },
    });

    if (!transaction) throw new NotFoundException('Transaction not found');

    return new TransactionEntity(transaction);
  }

  async update(bookId: string, transactionId: string, dto: UpdateTransactionDto) {
    const existing = await this.prisma.transaction.findFirst({
      where: { id: transactionId, account: { bookId } },
    });

    if (!existing) throw new NotFoundException('Transaction not found');

    if (dto.accountId && dto.categoryId) {
      await this.validateAccountAndCategoryBelongToBook(bookId, dto.accountId, dto.categoryId);
    }

    const updated = await this.prisma.transaction.update({
      where: { id: transactionId },
      data: {
        ...dto,
      },
    });

    return new TransactionEntity(updated);
  }

  async remove(bookId: string, transactionId: string) {
    const transaction = await this.prisma.transaction.findFirst({
      where: { id: transactionId, account: { bookId } },
    });

    if (!transaction) throw new NotFoundException('Transaction not found');

    const deleted = await this.prisma.transaction.delete({
      where: { id: transactionId },
    });

    return new TransactionEntity(deleted);
  }

  private async validateAccountAndCategoryBelongToBook(bookId: string, accountId: string, categoryId: string) {
    const [account, category] = await Promise.all([
      this.prisma.account.findUnique({ where: { id: accountId } }),
      this.prisma.category.findUnique({ where: { id: categoryId } }),
    ]);

    if (!account || account.bookId !== bookId) {
      throw new ForbiddenException('Account does not belong to the specified book');
    }

    if (!category || category.bookId !== bookId) {
      throw new ForbiddenException('Category does not belong to the specified book');
    }

    return category;
  }
}
