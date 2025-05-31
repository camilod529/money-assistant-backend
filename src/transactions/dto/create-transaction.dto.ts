import { IsDecimal, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateTransactionDto {
  @IsUUID()
  accountId: string;

  @IsUUID()
  categoryId: string;

  @IsDecimal()
  amount: number;

  @IsNotEmpty()
  transactionAt: Date;

  @IsOptional()
  @IsString()
  description?: string;
}
