import { Injectable } from '@nestjs/common';
import { APP_GLOBAL } from '../constants';
@Injectable()
export class AppService {
  getHello(): string {
    return APP_GLOBAL.TITLE_WELCOME;
  }
}

// HTTP GET / --> controller --> service
