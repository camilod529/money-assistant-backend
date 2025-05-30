import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { ACCOUNT_TYPES, AccountType } from '../constants/account-types.const';

export class CreateAccountDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(ACCOUNT_TYPES)
  type: AccountType;

  @IsString()
  @IsNotEmpty()
  currencyCode: string;
}
