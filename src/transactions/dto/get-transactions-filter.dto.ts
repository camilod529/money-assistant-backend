import { IsDateString, IsEnum, IsOptional } from 'class-validator';
import { TransactionType } from '../../../generated/prisma/index';

export class GetTransactionsFiltersDto {
  @IsOptional()
  @IsDateString()
  from?: string;

  @IsOptional()
  @IsDateString()
  to?: string;

  @IsOptional()
  @IsEnum(TransactionType)
  type?: TransactionType;
}
