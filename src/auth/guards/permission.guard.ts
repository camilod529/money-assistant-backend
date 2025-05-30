import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthorizationService } from '../authorization.service';
import { HAS_PERMISSION } from '../decorators/has-permission.decorator';
import { RequestWithUser } from '../interfaces/request-with-user.interface';

@Injectable()
export class PermissionGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly authorizationService: AuthorizationService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredPermissions = this.reflector.get<string[]>(HAS_PERMISSION, context.getHandler());

    if (!requiredPermissions) return true;

    const request = context.switchToHttp().getRequest<RequestWithUser>();

    const user = request.user;
    const bookId = request.params.bookId || request.body.bookId;

    if (!bookId) return false;

    const userPermissions = await this.authorizationService.getUserPermissions(user.id, bookId);

    return requiredPermissions.every((permission) => userPermissions.includes(permission));
  }
}
