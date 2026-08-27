import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHome(): string {
    return 'Halaman Home NestJS';
  }

  @Get('hello')
  getHello(): string {
    return 'Hello from NestJS!';
  }

  @Get('about')
  getAbout(): string {
    return 'Saya sedang belajar NestJS';
  }

  @Get('users/:id')
  getUser(@Param('id') id: string): string {
    return `User ID: ${id}`;
  }

  @Get('search')
  searchUser(@Query('name') name: string): string {
    return `Mencari user: ${name}`;
  }

  @Get('message')
  getMessage(): string {
    return this.appService.getMessage();
  }
}