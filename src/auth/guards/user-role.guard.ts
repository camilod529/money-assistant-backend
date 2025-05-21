import { BadRequestException, CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { META_ROLES } from '../decorators/role-protected.decorator';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class userRoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const validRoles = this.reflector.get<string[]>(META_ROLES, context.getHandler());

    if (!validRoles) return true;

    if (validRoles.length === 0) return true;

    const request = context.switchToHttp().getRequest<Request & { user: UserEntity }>();

    const user = request.user;

    if (!user) throw new BadRequestException('User not found in request');

    return user.role.some((role) => validRoles.includes(role)) ?? false;
  }
}
