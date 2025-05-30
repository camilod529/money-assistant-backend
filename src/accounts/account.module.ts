import { Module } from '@nestjs/common';
import { AuthorizationModule } from '../auth/authorization.module';
import { PrismaModule } from '../prisma/prisma.module';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';

@Module({
  controllers: [AccountController],
  providers: [AccountService],
  imports: [PrismaModule, AuthorizationModule],
})
export class AccountModule {}
