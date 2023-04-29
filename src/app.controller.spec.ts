import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_GLOBAL } from './../constants';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  describe('root', () => {
    it('should return TITLE_WELCOME', () => {
      expect(appController.getHello()).toBe(APP_GLOBAL.TITLE_WELCOME);
      expect(appService.getHello()).toBe(APP_GLOBAL.TITLE_WELCOME);
    });
  });
});
