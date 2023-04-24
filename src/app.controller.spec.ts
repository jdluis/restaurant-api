import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_GLOBAL } from '../consts';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return TITLE_WELCOME', () => {
      expect(appController.getHello()).toBe(APP_GLOBAL.TITLE_WELCOME);
    });
  });
});
