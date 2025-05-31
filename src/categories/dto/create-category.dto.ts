import { IsEnum, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { TransactionType } from '../../../generated/prisma';

export class CreateCategoryDto {
  @IsUUID()
  bookId: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(TransactionType)
  type: TransactionType;
}
