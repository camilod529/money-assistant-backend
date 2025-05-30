import { Module } from '@nestjs/common';
import { AccountModule } from './accounts/account.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AuthorizationModule } from './auth/authorization.module';
import { BooksModule } from './books/books.module';
import { MembersModule } from './members/members.module';
import { PrismaModule } from './prisma/prisma.module';
import { SettingsModule } from './settings/settings.module';

@Module({
  imports: [PrismaModule, AuthModule, BooksModule, MembersModule, AuthorizationModule, AccountModule, SettingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
