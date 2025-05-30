import { ApiProperty } from '@nestjs/swagger';
import { Currency, Setting } from '../../../generated/prisma';

export class SettingsEntity implements Setting {
  @ApiProperty()
  id: string;
  @ApiProperty()
  userId: string;
  @ApiProperty()
  theme: string;
  @ApiProperty()
  currencyCode: string | null;
  @ApiProperty()
  locale: string | null;
  @ApiProperty()
  notificationEnabled: boolean;

  currency: Currency | null;

  constructor(partial: Partial<SettingsEntity>) {
    Object.assign(this, partial);
  }
}
