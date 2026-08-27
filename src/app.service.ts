import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getMessage(): string {
    return 'Pesan ini berasal dari AppService';
  }

  getInfo(): string {
  return 'Service berhasil digunakan melalui Dependency Injection';
}
}
