import { Body, Controller, Get, Put } from '@nestjs/common';
import { UserEntity } from 'src/auth/entities/user.entity';
import { AuthPermission } from '../auth/decorators/auth-permission.decorator';
import { GetUser } from '../auth/decorators/get-user.decorator';
import { UpdateSettingsDto } from './dto/update-setting.dto';
import { SettingsService } from './settings.service';

@Controller('settings')
@AuthPermission()
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Get()
  async getSettings(@GetUser() user: UserEntity) {
    return this.settingsService.findUserSettings(user.id);
  }

  @Put()
  async updateSettings(@GetUser() user: UserEntity, @Body() updateSettingsDto: UpdateSettingsDto) {
    return this.settingsService.updateUserSettings(user.id, updateSettingsDto);
  }
}
