import { Type } from 'class-transformer';
import { IsDecimal, IsNotEmpty, IsString } from 'class-validator';

export class CreateCurrencyDto {
  @IsString()
  @IsNotEmpty()
  code: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  symbol: string;

  @Type(() => Number)
  @IsDecimal()
  exchangeRate: number;
}
