import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEnum, IsOptional, ValidateIf } from 'class-validator';
import { Role } from '../../../generated/prisma/index';

interface IUpdateMemberDto {
  role: Role;
  canManageCategories?: boolean;
  canManageBudgets?: boolean;
  canInviteMembers?: boolean;
}

export class UpdateMemberDto implements IUpdateMemberDto {
  @IsEnum(Role)
  role: Role;

  @ApiProperty({ required: false })
  @IsBoolean()
  @IsOptional()
  @ValidateIf((o: IUpdateMemberDto) => o.role !== 'ADMIN')
  canManageCategories?: boolean;

  @ApiProperty({ required: false })
  @IsBoolean()
  @IsOptional()
  @ValidateIf((o: IUpdateMemberDto) => o.role !== 'ADMIN')
  canManageBudgets?: boolean;

  @ApiProperty({ required: false })
  @IsBoolean()
  @IsOptional()
  @ValidateIf((o: IUpdateMemberDto) => o.role !== 'ADMIN')
  canInviteMembers?: boolean;
}
