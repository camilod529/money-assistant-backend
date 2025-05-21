import { Role, User } from 'generated/prisma';

export class UserEntity implements User {
  id: string;
  email: string;
  username: string;
  password: string;
  createdAt: Date;
  role: Role[];

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}
