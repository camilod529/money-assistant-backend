import { ApiProperty } from '@nestjs/swagger';
import { Decimal } from 'generated/prisma/runtime/library';
import { Account, Currency, ExchangeRate, Setting } from './../../../generated/prisma/index.d';

export class CurrencyEntity implements Currency {
  @ApiProperty()
  symbol: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  code: string;
  @ApiProperty()
  exchangeRate: Decimal;
  accounts?: Account[];
  settings?: Setting[];
  exchangeRates?: ExchangeRate[];
  createdAt?: Date;
  updatedAt?: Date;

  constructor(partial: Partial<CurrencyEntity>) {
    Object.assign(this, partial);
  }
}
