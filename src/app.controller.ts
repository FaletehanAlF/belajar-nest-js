import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
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
}
