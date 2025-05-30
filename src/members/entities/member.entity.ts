import { Member, Role } from './../../../generated/prisma';
export class MemberEntity implements Member {
  name: string;
  id: string;
  bookId: string;
  userId: string;
  canManageCategories: boolean;
  canManageBudgets: boolean;
  canInviteMembers: boolean;
  createdAt: Date;
  role: Role;

  constructor(partial: Partial<MemberEntity>) {
    Object.assign(this, partial);
    this.canManageCategories = this.canManageCategories ?? false;
    this.canManageBudgets = this.canManageBudgets ?? false;
    this.canInviteMembers = this.canInviteMembers ?? false;
  }
}
