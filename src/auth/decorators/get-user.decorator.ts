import { createParamDecorator, ExecutionContext, InternalServerErrorException } from '@nestjs/common';
import { UserEntity } from '../entities/user.entity';

export const GetUser = createParamDecorator(<T extends keyof UserEntity>(data: T, context: ExecutionContext) => {
  const request = context.switchToHttp().getRequest<Request & { user: UserEntity }>();

  const user = request.user;

  if (!user) throw new InternalServerErrorException('User not found in request');

  return data ? user[data] : user;
});
