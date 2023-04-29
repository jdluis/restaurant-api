import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { DATA_BASE } from './../../constants';
import { User } from './interfaces/user.interface';
@Injectable()
export class UsersService {
  //Aqui tengo el problema
  constructor(
    //!Remember for Model of Mongoose @Inject: dosent work, and test fail, use @InjectModel
    @Inject(DATA_BASE.USER_MODEL) private userModel: Model<User>,
  ) {}

  async getUsers() {
    return await this.userModel.find().exec();
  }

  async getClients(type?: 'client') {
    if (type) {
      return await this.userModel.find({ type: 'client' }).exec();
    }
  }

  async getOneUser(id: number) {
    const user = await this.userModel.findById(id).exec();

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }

  createUser(createUserDto: CreateUserDto): Promise<User> {
    return this.userModel.create(createUserDto);
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto) {
    const updatedUser = await this.userModel
      .findByIdAndUpdate(id, updateUserDto, { new: true })
      .exec();
    if (!updatedUser) {
      throw new Error('User not found');
    }
    return updatedUser;
  }

  async removeUser(id: number) {
    const deletedUser = await this.userModel.findByIdAndDelete(id).exec();
    if (!deletedUser) {
      throw new Error('User not found');
    }
    return deletedUser;
  }
}
