import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { GetUser } from 'src/auth/decorators/get-user.decorator';
import { Auth } from '../auth/decorators/auth.decorator';
import { UserEntity } from '../auth/entities/user.entity';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { MembersService } from './members.service';

@Controller('members')
export class MembersController {
  constructor(private readonly membersService: MembersService) {}

  @Auth()
  @Post()
  create(@GetUser() user: UserEntity, @Body() createMemberDto: CreateMemberDto) {
    return this.membersService.invite(user.id, createMemberDto);
  }

  @Auth()
  @Get(':bookId')
  findAll(@Param('bookId') bookId: string, @GetUser() user: UserEntity) {
    return this.membersService.findAll(bookId, user.id);
  }

  @Auth()
  @Put(':bookId/:memberId')
  update(
    @Param('bookId') bookId: string,
    @Param('memberId') memberId: string,
    @GetUser() user: UserEntity,
    @Body() updateMemberDto: UpdateMemberDto,
  ) {
    return this.membersService.update(bookId, memberId, user.id, updateMemberDto);
  }

  @Auth()
  @Delete(':bookId/:memberId')
  remove(@Param('bookId') bookId: string, @Param('memberId') memberId: string, @GetUser() user: UserEntity) {
    return this.membersService.remove(bookId, memberId, user.id);
  }
}
