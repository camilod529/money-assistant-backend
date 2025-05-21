import { applyDecorators, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Role } from 'generated/prisma';
import { userRoleGuard } from '../guards/user-role.guard';
import { RoleProtected } from './role-protected.decorator';

export const Auth = (...roles: Role[]) => {
  return applyDecorators(RoleProtected(...roles), UseGuards(AuthGuard('jwt'), userRoleGuard));
};
