import { ApiProperty } from '@nestjs/swagger';
import { Decimal } from 'generated/prisma/runtime/library';
import { ExchangeRate } from '../../../generated/prisma/index';

export class ExchangeRateEntity implements ExchangeRate {
  @ApiProperty()
  id: string;
  @ApiProperty()
  currencyCode: string;
  @ApiProperty()
  rateToBase: Decimal;
  @ApiProperty()
  validFrom: Date;
  @ApiProperty()
  validTo: Date | null;
  @ApiProperty()
  source: string;
  @ApiProperty()
  createdAt: Date;

  constructor(partial: Partial<ExchangeRateEntity>) {
    Object.assign(this, partial);
  }
}
