import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { MembersController } from './members.controller';
import { MembersService } from './members.service';

@Module({
  controllers: [MembersController],
  providers: [MembersService],
  imports: [PrismaModule],
})
export class MembersModule {}
