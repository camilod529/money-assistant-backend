import { Role } from 'generated/prisma';

export interface JwtPayload {
  id: string;
  email: string;
  roles?: Role[];
}
