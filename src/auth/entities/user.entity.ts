import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { Role, User } from '../../../generated/prisma';

export class UserEntity implements User {
  @ApiProperty()
  id: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  username: string;
  @Exclude()
  password: string;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  role: Role[];

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}
