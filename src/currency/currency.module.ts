import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { CurrencyController } from './currency.controller';
import { CurrencyService } from './currency.service';

@Module({
  controllers: [CurrencyController],
  providers: [CurrencyService],
  imports: [PrismaModule],
  exports: [CurrencyService],
})
export class CurrencyModule {}
