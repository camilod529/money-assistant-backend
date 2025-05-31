import { ApiProperty } from '@nestjs/swagger';
import { Decimal } from 'generated/prisma/runtime/library';
import { Transaction } from './../../../generated/prisma';
export class TransactionEntity implements Transaction {
  @ApiProperty()
  id: string;
  @ApiProperty()
  accountId: string;
  @ApiProperty()
  categoryId: string;
  @ApiProperty()
  amount: Decimal;
  @ApiProperty()
  transactionAt: Date;
  @ApiProperty()
  description: string | null;
  @ApiProperty()
  createdAt: Date;

  constructor(partial: Partial<TransactionEntity>) {
    Object.assign(this, partial);
  }
}
