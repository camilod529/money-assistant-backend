import { Module } from '@nestjs/common';
import { AuthorizationModule } from 'src/auth/authorization.module';
import { PrismaModule } from '../prisma/prisma.module';
import { MembersController } from './members.controller';
import { MembersService } from './members.service';

@Module({
  controllers: [MembersController],
  providers: [MembersService],
  imports: [PrismaModule, AuthorizationModule],
})
export class MembersModule {}
