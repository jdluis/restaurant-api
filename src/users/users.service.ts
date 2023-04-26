import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './interfaces/user.interface';
import { DATA_BASE } from '../../constants';
@Injectable()
export class UsersService {
  constructor(
    @Inject(DATA_BASE.USER_MODEL) private readonly userModel: Model<User>,
  ) {}

  //For testing
  private users = [
    {
      id: 0,
      type: 'admin',
      name: 'admin',
      email: 'admin@gmail.com',
    },
    {
      id: 1,
      type: 'client',
      name: 'clientTest',
      email: 'clientTest@gmail.com',
    },
  ];

  getUsers() {
    return this.userModel.find();
  }

  getClients(type?: 'client') {
    if (type) {
      return this.users.filter((user) => user.type === type);
    }
  }

  getOneUser(id: number) {
    const user = this.users.find((user) => user.id === id);

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }
  createUser(createUserDto: CreateUserDto): Promise<User> {
    /* const newUser = {
      ...createUserDto,
      id: Date.now(),
    };
    this.users.push(newUser); */

    const createdUser = this.userModel.create(createUserDto);
    return createdUser;
  }

  updateUser(id: number, updateUserDto: UpdateUserDto) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updateUserDto };
      }

      return user;
    });
    return this.getOneUser(id);
  }

  removeUser(id: number) {
    const toBeRemoved = this.getOneUser(id);

    this.users = this.users.filter((user) => user.id !== id);

    return toBeRemoved;
  }
}
