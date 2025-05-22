import { IsEnum, IsUUID } from 'class-validator';
import { Role } from '../../../generated/prisma/index';

export class CreateMemberDto {
  @IsUUID()
  bookId: string;

  @IsUUID()
  userId: string;

  @IsEnum(Role)
  role: Role;
}
