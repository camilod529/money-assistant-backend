import { Injectable } from '@nestjs/common';
import { Role } from '../../generated/prisma';
import { PERMISSIONS } from '../config/permissions.const';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthorizationService {
  constructor(private prisma: PrismaService) {}

  private getPermissionsForRole(role: Role): string[] {
    const permissions: Record<Role, string[]> = {
      SUPER_ADMIN: Object.values(PERMISSIONS).flatMap((category) => Object.values(category)),
      ADMIN: [
        ...Object.values(PERMISSIONS.BOOK),
        ...Object.values(PERMISSIONS.ACCOUNT),
        ...Object.values(PERMISSIONS.TRANSACTION),
      ],
      EDITOR: [
        PERMISSIONS.BOOK.MANAGE_CATEGORIES,
        PERMISSIONS.ACCOUNT.VIEW,
        PERMISSIONS.TRANSACTION.CREATE,
        PERMISSIONS.TRANSACTION.UPDATE,
        PERMISSIONS.TRANSACTION.VIEW,
      ],
      CONTRIBUTOR: [PERMISSIONS.TRANSACTION.CREATE, PERMISSIONS.TRANSACTION.VIEW],
      VIEWER: [PERMISSIONS.TRANSACTION.VIEW, PERMISSIONS.ACCOUNT.VIEW],
    };
    return permissions[role] || [];
  }

  async getUserPermissions(userId: string, bookId: string) {
    const [isOwner, member] = await Promise.all([
      this.prisma.book.findFirst({
        where: { id: bookId, userId },
      }),
      this.prisma.member.findUnique({
        where: {
          bookId_userId: {
            bookId,
            userId,
          },
        },
      }),
    ]);

    if (isOwner) return this.getPermissionsForRole(Role.ADMIN);

    if (!member) return [];

    const rolePermissions = this.getPermissionsForRole(member.role);

    const memberPermissions = [];

    if (member.canManageCategories) memberPermissions.push(PERMISSIONS.BOOK.MANAGE_CATEGORIES);
    if (member.canManageBudgets) memberPermissions.push(PERMISSIONS.BOOK.MANAGE_BUDGETS);
    if (member.canInviteMembers) memberPermissions.push(PERMISSIONS.BOOK.INVITE_MEMBER);

    return [...rolePermissions, ...memberPermissions];
  }

  async hasPermission(userId: string, bookId: string, permission: string) {
    const permissions = await this.getUserPermissions(userId, bookId);
    return permissions.includes(permission);
  }
}
