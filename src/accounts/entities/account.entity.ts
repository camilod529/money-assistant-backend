import { ApiProperty } from '@nestjs/swagger';
import { Account } from '../../../generated/prisma';
import { Decimal } from '../../../generated/prisma/runtime/library';

export class AccountEntity implements Account {
  @ApiProperty()
  name: string;
  @ApiProperty()
  id: string;
  @ApiProperty()
  bookId: string;
  @ApiProperty()
  type: string;
  @ApiProperty()
  currencyCode: string;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  balance: Decimal;

  constructor(partial: Partial<AccountEntity>) {
    Object.assign(this, partial);
  }
}
