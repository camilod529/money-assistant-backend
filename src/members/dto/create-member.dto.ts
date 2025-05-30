import { IsBoolean, IsEnum, IsOptional, IsUUID, ValidateIf } from 'class-validator';
import { Role } from '../../../generated/prisma/index';

interface ICreateMemberDto {
  bookId: string;
  userId: string;
  role: Role;
  canManageCategories?: boolean;
  canManageBudgets?: boolean;
  canInviteMembers?: boolean;
}
export class CreateMemberDto implements ICreateMemberDto {
  @IsUUID()
  bookId: string;

  @IsUUID()
  userId: string;

  @IsEnum(Role)
  role: Role;

  @IsBoolean()
  @IsOptional()
  @ValidateIf((o: ICreateMemberDto) => o.role !== Role.ADMIN)
  canManageCategories?: boolean;

  @IsBoolean()
  @IsOptional()
  @ValidateIf((o: ICreateMemberDto) => o.role !== Role.ADMIN)
  canManageBudgets?: boolean;

  @IsBoolean()
  @IsOptional()
  @ValidateIf((o: ICreateMemberDto) => o.role !== Role.ADMIN)
  canInviteMembers?: boolean;
}
