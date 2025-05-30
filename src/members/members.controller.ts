import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { AuthPermission } from '../auth/decorators/auth-permission.decorator';
import { GetUser } from '../auth/decorators/get-user.decorator';
import { HasPermission } from '../auth/decorators/has-permission.decorator';
import { UserEntity } from '../auth/entities/user.entity';
import { PERMISSIONS } from '../config/permissions.const';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { MembersService } from './members.service';

@Controller('books/:bookId/members')
@AuthPermission()
export class MembersController {
  constructor(private readonly membersService: MembersService) {}

  @Post()
  @HasPermission(PERMISSIONS.BOOK.INVITE_MEMBER)
  create(
    @GetUser() user: UserEntity,
    @Body() createMemberDto: CreateMemberDto,
    @Param('bookId', new ParseUUIDPipe()) bookId: string,
  ) {
    return this.membersService.invite(user.id, { ...createMemberDto, bookId });
  }

  @Get()
  @HasPermission(PERMISSIONS.BOOK.INVITE_MEMBER)
  findAll(@Param('bookId', new ParseUUIDPipe()) bookId: string, @GetUser() user: UserEntity) {
    return this.membersService.findAll(bookId, user.id);
  }

  @Put(':memberId')
  @HasPermission(PERMISSIONS.BOOK.REMOVE_MEMBER)
  update(
    @Param('bookId', new ParseUUIDPipe()) bookId: string,
    @Param('memberId', new ParseUUIDPipe()) memberId: string,
    @GetUser() user: UserEntity,
    @Body() updateMemberDto: UpdateMemberDto,
  ) {
    return this.membersService.update(bookId, memberId, user.id, updateMemberDto);
  }

  @Delete(':memberId')
  @HasPermission(PERMISSIONS.BOOK.REMOVE_MEMBER)
  remove(
    @Param('bookId', new ParseUUIDPipe()) bookId: string,
    @Param('memberId', new ParseUUIDPipe()) memberId: string,
    @GetUser() user: UserEntity,
  ) {
    return this.membersService.remove(bookId, memberId, user.id);
  }
}
