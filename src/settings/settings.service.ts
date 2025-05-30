import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateSettingsDto } from './dto/update-setting.dto';
import { SettingsEntity } from './entities/setting.entity';

@Injectable()
export class SettingsService {
  constructor(private readonly prisma: PrismaService) {}

  async findUserSettings(userId: string) {
    const settings = await this.prisma.setting.findUnique({
      where: { userId },
      include: { currency: true },
    });

    if (!settings) {
      throw new Error('Settings not found for the user');
    }

    return new SettingsEntity(settings);
  }

  async updateUserSettings(userId: string, updateSettingsDto: UpdateSettingsDto) {
    if (updateSettingsDto.currencyCode) {
      const currencyExists = await this.prisma.currency.findUnique({
        where: { code: updateSettingsDto.currencyCode },
      });
      if (!currencyExists) {
        throw new NotFoundException('Currency not found');
      }
    }

    const updatedSettings = await this.prisma.setting.upsert({
      where: { userId },
      update: {
        ...updateSettingsDto,
        ...(updateSettingsDto.currencyCode && {
          currencyCode: updateSettingsDto.currencyCode,
        }),
      },
      create: {
        userId,
        theme: updateSettingsDto.theme || 'light',
        locale: updateSettingsDto.locale || 'en-US',
        notificationEnabled: updateSettingsDto.notificationEnabled ?? false,
        currencyCode: updateSettingsDto.currencyCode || null,
      },
      include: { currency: true },
    });

    return new SettingsEntity(updatedSettings);
  }
}
