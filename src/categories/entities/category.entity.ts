import { ApiProperty } from '@nestjs/swagger';
import { Category, TransactionType } from '../../../generated/prisma/index';
export class CategoryEntity implements Category {
  @ApiProperty()
  name: string;
  @ApiProperty()
  id: string;
  @ApiProperty()
  bookId: string;
  @ApiProperty()
  type: TransactionType;

  constructor(partial: Partial<CategoryEntity>) {
    Object.assign(this, partial);
  }
}
