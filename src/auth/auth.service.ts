import { ForbiddenException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcryptjs from 'bcryptjs';
import { instanceToPlain } from 'class-transformer';
import { PrismaClientKnownRequestError } from '../../generated/prisma/runtime/library';
import { PrismaService } from '../prisma/prisma.service';
import { LoginUserDto } from './dto/login-user.dto';
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

  public async register(data: RegisterUserDto) {
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
        ...instanceToPlain(returnUser),
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

  public async login(data: LoginUserDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (!user) {
      throw new ForbiddenException('Invalid credentials');
    }

    const isPasswordValid = await bcryptjs.compare(data.password, user.password);

    if (!isPasswordValid) {
      throw new ForbiddenException('Invalid credentials');
    }

    const returnUser = new UserEntity({ ...user });

    const token = this.generateToken({
      id: returnUser.id,
      email: returnUser.email,
      roles: returnUser.role,
    });

    return {
      ...instanceToPlain(returnUser),
      token,
    };
  }

  public checkStatus(user: UserEntity) {
    const returnUser = new UserEntity({ ...user });

    const token = this.generateToken({
      id: returnUser.id,
      email: returnUser.email,
      roles: returnUser.role,
    });

    return {
      ...instanceToPlain(returnUser),
      token,
    };
  }

  private generateToken(payload: JwtPayload): string {
    return this.jwtService.sign(payload);
  }
}
