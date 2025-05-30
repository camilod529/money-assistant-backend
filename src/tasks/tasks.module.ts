import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CurrencyModule } from '../currency/currency.module';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  controllers: [TasksController],
  providers: [TasksService],
  imports: [HttpModule, CurrencyModule],
})
export class TasksModule {}
