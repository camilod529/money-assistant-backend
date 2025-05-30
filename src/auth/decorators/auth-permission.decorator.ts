import { applyDecorators, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PermissionGuard } from '../guards/permission.guard';

export function AuthPermission() {
  return applyDecorators(UseGuards(AuthGuard('jwt'), PermissionGuard));
}
