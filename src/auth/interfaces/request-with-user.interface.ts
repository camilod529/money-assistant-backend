import { Request } from 'express';
import { UserEntity } from '../entities/user.entity';

export interface RequestWithUser extends Request {
  user: UserEntity;
  params: {
    [key: string]: string;
  } & { bookId?: string };
  body: {
    bookId?: string;
    [key: string]: any;
  };
}
