import { Test, TestingModule } from '@nestjs/testing';
import { MenuController } from './menu.controller';
import { MenuService } from './menu.service';
import { menuProviders } from './menu.provider';
import { DatabaseModule } from './../database/database.module';

describe('MenuController', () => {
  let controller: MenuController;

  const mockMenuService = {
    createUser: jest.fn((dto) => {
      return {
        id: Date.now(),
        ...dto,
      };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      controllers: [MenuController],
      providers: [MenuService, ...menuProviders],
    })
      .overrideProvider(MenuService)
      .useValue(mockMenuService)
      .compile();

    controller = module.get<MenuController>(MenuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
