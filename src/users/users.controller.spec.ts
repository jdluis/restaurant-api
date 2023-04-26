import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { DatabaseModule } from './../database/database.module';
import { usersProviders } from './users.provider';

describe('UsersController', () => {
  let controller: UsersController;

  const mockUsersService = {
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
      controllers: [UsersController],
      providers: [UsersService, ...usersProviders],
    })
      .overrideProvider(UsersService)
      .useValue(mockUsersService)
      .compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create user', () => {
    expect(
      controller.createUser({
        name: 'Juan77',
        email: 'peep@gmail',
        type: 'client',
        password: 'dsafugha7968975',
      }),
    ).toEqual({
      id: expect.any(Number),
      name: 'Juan77',
      email: 'peep@gmail',
      type: 'client',
      password: 'dsafugha7968975',
    });
  });
});
