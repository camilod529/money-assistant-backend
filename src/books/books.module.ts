import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';

@Module({
  controllers: [BooksController],
  providers: [BooksService],
  imports: [PrismaModule],
})
export class BooksModule {}
