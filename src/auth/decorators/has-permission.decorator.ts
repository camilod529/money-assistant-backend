import { SetMetadata } from '@nestjs/common';

export const HAS_PERMISSION = 'has_permission';
export const HasPermission = (...permissions: string[]) => SetMetadata(HAS_PERMISSION, permissions);
