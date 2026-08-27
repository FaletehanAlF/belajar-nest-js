import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers(): string {
    return 'Daftar Users';
  }

  @Post()
  createUser(@Body() body: any): any {
    return {
      message: 'User berhasil dibuat',
      data: body,
    };
  }
}