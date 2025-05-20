import { ForbiddenException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import * as bcryptjs from 'bcryptjs';
import { PrismaClientKnownRequestError } from '../../generated/prisma/runtime/library';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterUserDto } from './dto/register-user.dto';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(private readonly prisma: PrismaService) {}

  async register(data: RegisterUserDto) {
    try {
      const hashedPassword = await bcryptjs.hash(data.password, 10);
      const user = await this.prisma.user.create({
        data: {
          email: data.email,
          password: hashedPassword,
          username: data.username,
        },
      });

      return {
        id: user.id,
        email: user.email,
        username: user.username,
      };
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError && error.code === 'P2002') {
        throw new ForbiddenException('User already exists');
      }

      this.logger.error('Error creating user', error);
      throw new InternalServerErrorException('Error creating user');
    }
  }
}
