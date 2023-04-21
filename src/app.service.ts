import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hey Avocadosss!';
  }
}

// HTTP GET / --> controller --> service
