import { PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDateString, IsDecimal, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateExchangeRateDto {
  @IsString()
  @IsNotEmpty()
  currencyCode: string;

  @Type(() => Number)
  @IsDecimal()
  rateToBase: number;

  @IsDateString()
  validFrom: string;

  @IsOptional()
  @IsDateString()
  validTo?: string;

  @IsString()
  @IsNotEmpty()
  source: string;
}

export class UpdateExchangeRateDto extends PartialType(CreateExchangeRateDto) {}
