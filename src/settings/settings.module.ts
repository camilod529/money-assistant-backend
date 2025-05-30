import { Module } from '@nestjs/common';
import { AuthorizationModule } from 'src/auth/authorization.module';
import { PrismaModule } from '../prisma/prisma.module';
import { SettingsController } from './settings.controller';
import { SettingsService } from './settings.service';

@Module({
  controllers: [SettingsController],
  providers: [SettingsService],
  imports: [PrismaModule, AuthorizationModule],
  exports: [SettingsService],
})
export class SettingsModule {}
