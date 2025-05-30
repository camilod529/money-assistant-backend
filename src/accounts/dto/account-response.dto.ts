import { ApiProperty } from '@nestjs/swagger';
import { ACCOUNT_TYPES, AccountType } from '../constants/account-types.const';

export class AccountResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty({ enum: Object.values(ACCOUNT_TYPES) })
  type: AccountType;

  @ApiProperty()
  currencyCode: string;

  @ApiProperty()
  currentBalance: number;

  @ApiProperty()
  createdAt: Date;
}
