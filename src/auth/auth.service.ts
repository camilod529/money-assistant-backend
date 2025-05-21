import { ForbiddenException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcryptjs from 'bcryptjs';
import { PrismaClientKnownRequestError } from '../../generated/prisma/runtime/library';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { UserEntity } from './entities/user.entity';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async register(data: RegisterUserDto) {
    try {
      const hashedPassword = await bcryptjs.hash(data.password, 10);
      const user = await this.prisma.user.create({
        data: {
          ...data,
          password: hashedPassword,
        },
      });

      const returnUser = new UserEntity({ ...user });

      const token = this.generateToken({
        id: returnUser.id,
        email: returnUser.email,
        roles: returnUser.role,
      });

      return {
        ...returnUser,
        token,
      };
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError && error.code === 'P2002') {
        throw new ForbiddenException('User already exists');
      }

      this.logger.error('Error creating user', error);
      throw new InternalServerErrorException('Error creating user');
    }
  }

  private generateToken(payload: JwtPayload): string {
    return this.jwtService.sign(payload);
  }
}
