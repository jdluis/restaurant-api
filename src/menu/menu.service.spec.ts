import { Test, TestingModule } from '@nestjs/testing';
import { MenuService } from './menu.service';
import { getModelToken } from '@nestjs/mongoose';

describe('MenuService', () => {
  let service: MenuService;

  const mockMenuModel = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MenuService,
        {
          provide: getModelToken('MENU_MODEL'),
          useValue: mockMenuModel,
        },
      ],
    }).compile();

    service = module.get<MenuService>(MenuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
