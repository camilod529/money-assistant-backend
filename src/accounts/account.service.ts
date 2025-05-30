import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { AccountEntity } from './entities/account.entity';

@Injectable()
export class AccountService {
  constructor(private readonly prisma: PrismaService) {}

  async create(bookId: string, createAccountDto: CreateAccountDto) {
    const currencyExists = await this.prisma.currency.findUnique({
      where: { code: createAccountDto.currencyCode },
    });

    if (!currencyExists) {
      throw new Error(`Currency with code ${createAccountDto.currencyCode} does not exist.`);
    }

    const account = await this.prisma.account.create({
      data: {
        ...createAccountDto,
        bookId,
        balance: 0, // Initial balance set to 0
      },
      include: {
        currency: true,
      },
    });

    return new AccountEntity({ ...account });
  }

  async findAll(bookId: string) {
    const accounts = await this.prisma.account.findMany({
      where: { bookId },
      include: {
        currency: true,
        transactions: {
          orderBy: {
            createdAt: 'desc',
          },
          take: 5, // Limit to the last 5 transactions
        },
      },
    });

    return accounts.map(
      (account) =>
        new AccountEntity({
          ...account,
        }),
    );
  }

  async findOne(bookId: string, accountId: string) {
    const account = await this.prisma.account.findUnique({
      where: {
        id: accountId,
        bookId: bookId,
      },
      include: {
        currency: true,
        transactions: {
          orderBy: {
            createdAt: 'desc',
          },
          take: 5, // Limit to the last 5 transactions
        },
      },
    });

    if (!account) {
      throw new Error(`Account with ID ${accountId} not found in book ${bookId}.`);
    }

    return new AccountEntity({ ...account });
  }

  async update(bookId: string, accountId: string, updateAccountDto: UpdateAccountDto) {
    await this.verifyAccountOwnership(bookId, accountId);

    return new AccountEntity(
      await this.prisma.account.update({
        where: { id: accountId },
        data: updateAccountDto,
        include: {
          currency: true,
          transactions: {
            orderBy: {
              createdAt: 'desc',
            },
            take: 5, // Limit to the last 5 transactions
          },
        },
      }),
    );
  }

  async remove(bookId: string, accountId: string) {
    await this.verifyAccountOwnership(bookId, accountId);

    return this.prisma.$transaction(async (tx) => {
      await tx.transaction.deleteMany({
        where: { accountId },
      });

      const deletedAccount = await tx.account.delete({
        where: { id: accountId },
        include: {
          currency: true,
        },
      });

      return new AccountEntity({ ...deletedAccount });
    });
  }

  async updateBalance(bookId: string, accountId: string, amount: number) {
    await this.verifyAccountOwnership(bookId, accountId);

    const account = await this.prisma.account.findUnique({
      where: { id: accountId },
    });

    if (!account) {
      throw new NotFoundException(`Account with ID ${accountId} not found.`);
    }

    const updatedAccount = await this.prisma.account.update({
      where: { id: accountId },
      data: {
        balance: amount,
      },
      include: {
        currency: true,
        transactions: {
          orderBy: {
            createdAt: 'desc',
          },
          take: 5, // Limit to the last 5 transactions
        },
      },
    });

    return new AccountEntity({ ...updatedAccount });
  }

  private async verifyAccountOwnership(bookId: string, accountId: string) {
    const account = await this.prisma.account.findUnique({
      where: { id: accountId },
      select: { bookId: true },
    });

    if (!account || account.bookId !== bookId) {
      throw new NotFoundException(`Account with ID ${accountId} not found in book ${bookId}`);
    }
  }
}
