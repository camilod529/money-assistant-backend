import { IsEnum } from 'class-validator';
import { Role } from '../../../generated/prisma/index';

export class UpdateMemberDto {
  @IsEnum(Role)
  role: Role;
}
