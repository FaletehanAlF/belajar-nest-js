import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  @Get()
  getUsers(): string {
    return 'Daftar Users';
  }

  @Post()
  createUser(@Body() body: CreateUserDto): CreateUserDto {
    return body;
  }
}