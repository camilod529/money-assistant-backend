import { Member, Role } from './../../../generated/prisma';
export class MemberEntity implements Member {
  name: string;
  id: string;
  bookId: string;
  userId: string;
  role: Role;

  constructor(partial: Partial<MemberEntity>) {
    Object.assign(this, partial);
  }
}
