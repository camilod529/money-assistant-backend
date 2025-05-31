import { Module } from '@nestjs/common';
import { AuthorizationModule } from '../auth/authorization.module';
import { PrismaModule } from '../prisma/prisma.module';
import { TransactionsController } from './transactions.controller';
import { TransactionsService } from './transactions.service';

@Module({
  controllers: [TransactionsController],
  providers: [TransactionsService],
  imports: [PrismaModule, AuthorizationModule],
})
export class TransactionsModule {}
