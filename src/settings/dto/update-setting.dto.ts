import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateSettingsDto {
  @ApiProperty({
    description: 'Theme preference',
    example: 'dark',
    required: false,
  })
  @IsString()
  @IsOptional()
  theme?: string;

  @ApiProperty({
    description: 'Currency code',
    example: 'USD',
    required: false,
  })
  @IsString()
  @IsOptional()
  currencyCode?: string;

  @ApiProperty({
    description: 'Locale preference',
    example: 'es-ES',
    required: false,
  })
  @IsString()
  @IsOptional()
  locale?: string;

  @ApiProperty({
    description: 'Notification enabled',
    example: true,
    required: false,
  })
  @IsBoolean()
  @IsOptional()
  notificationEnabled?: boolean;
}
