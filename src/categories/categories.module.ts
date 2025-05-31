import { Module } from '@nestjs/common';
import { AuthorizationModule } from '../auth/authorization.module';
import { PrismaModule } from '../prisma/prisma.module';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService],
  imports: [PrismaModule, AuthorizationModule],
})
export class CategoriesModule {}
