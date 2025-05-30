import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { Role } from '../../generated/prisma/index';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { MemberEntity } from './entities/member.entity';

@Injectable()
export class MembersService {
  constructor(private readonly prisma: PrismaService) {}

  async invite(currentUserId: string, createMemberDto: CreateMemberDto) {
    const currentUser = await this.prisma.user.findUnique({
      where: {
        id: currentUserId,
      },
    });

    if (!currentUser) throw new ForbiddenException('User not found');

    const invitedUser = await this.prisma.user.findUnique({
      where: {
        id: createMemberDto.userId,
      },
    });

    if (!invitedUser) throw new NotFoundException('User not found');

    const currentMembership = await this.prisma.member.findUnique({
      where: {
        bookId_userId: {
          bookId: createMemberDto.bookId,
          userId: currentUser.id,
        },
      },
    });

    if (!currentMembership) throw new ForbiddenException('You are not a member of this book');

    if (currentMembership.role !== Role.ADMIN && !currentMembership.canInviteMembers)
      throw new ForbiddenException('You are not an admin of this book');

    const userMembership = await this.prisma.member.findUnique({
      where: {
        bookId_userId: {
          bookId: createMemberDto.bookId,
          userId: createMemberDto.userId,
        },
      },
    });

    if (userMembership) throw new ForbiddenException('User is already a member of this book');

    const member = await this.prisma.member.create({
      data: {
        bookId: createMemberDto.bookId,
        userId: createMemberDto.userId,
        role: createMemberDto.role,
        name: invitedUser.username,
        canManageCategories: createMemberDto.canManageCategories ?? false,
        canManageBudgets: createMemberDto.canManageBudgets ?? false,
        canInviteMembers: createMemberDto.canInviteMembers ?? false,
      },
    });

    const returnMember = new MemberEntity({ ...member });

    return returnMember;
  }

  async findAll(bookId: string, currentUserId: string) {
    const currentMembership = await this.prisma.member.findUnique({
      where: {
        bookId_userId: {
          bookId,
          userId: currentUserId,
        },
      },
    });

    if (!currentMembership) throw new ForbiddenException('You are not a member of this book');

    const members = await this.prisma.member.findMany({
      where: {
        bookId,
      },
      include: {
        user: {
          select: {
            id: true,
            username: true,
            email: true,
          },
        },
      },
    });

    if (!members) throw new NotFoundException('Members not found');

    return members.map((member) => new MemberEntity({ ...member }));
  }

  async update(bookId: string, memberId: string, currentUserId: string, updateMemberDto: UpdateMemberDto) {
    const adminMembership = await this.prisma.member.findUnique({
      where: {
        bookId_userId: {
          bookId,
          userId: currentUserId,
        },
      },
    });

    if (!adminMembership || adminMembership.role !== Role.ADMIN)
      throw new ForbiddenException('You are not a member of this book');

    if (memberId === adminMembership.userId && updateMemberDto.role !== undefined)
      throw new ForbiddenException('You cannot update your own role');

    const member = await this.prisma.member.update({
      where: { id: memberId },
      data: {
        role: updateMemberDto.role,
        canManageCategories: updateMemberDto.canManageCategories,
        canManageBudgets: updateMemberDto.canManageBudgets,
        canInviteMembers: updateMemberDto.canInviteMembers,
      },
    });

    const returnMember = new MemberEntity({ ...member });

    return returnMember;
  }

  async remove(bookId: string, memberId: string, currentUserId: string) {
    const admin = await this.prisma.member.findUnique({
      where: {
        bookId_userId: { bookId, userId: currentUserId },
      },
    });

    if (!admin || admin.role !== Role.ADMIN) {
      throw new ForbiddenException('you are not an admin of this book');
    }

    const memberUser = await this.prisma.member.findUnique({
      where: {
        id: memberId,
      },
    });

    if (!memberUser) {
      throw new NotFoundException('Member not found');
    }

    const member = await this.prisma.member.findUnique({
      where: {
        bookId_userId: { bookId, userId: memberUser.userId },
      },
    });

    if (!member) {
      throw new NotFoundException('Member not found');
    }

    if (member.userId === currentUserId) {
      throw new ForbiddenException('You cannot remove yourself');
    }

    if (memberId === currentUserId) {
      throw new ForbiddenException('you cannot remove yourself');
    }

    await this.prisma.member.delete({
      where: { id: member.id },
    });

    return { message: 'Member removed successfully' };
  }
}
