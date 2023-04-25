import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
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

  getUsers(type?: 'admin' | 'client') {
    //If type exist, then filter, if not return all
    if (type) {
      return this.users.filter((user) => user.type === type);
    }
    return this.users;
  }

  getOneUser(id: number) {
    const user = this.users.find((user) => user.id === id);

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }
  createUser(createUserDto: CreateUserDto) {
    const newUser = {
      ...createUserDto,
      id: Date.now(),
    };
    this.users.push(newUser);

    return newUser;
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
