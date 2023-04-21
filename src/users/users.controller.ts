import {
  Controller,
  Get,
  Put,
  Post,
  Delete,
  Param,
  Query,
  Body,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './user.service';

@Controller('users')
export class UsersController {
  //constructor(private readonly usersService: UsersService) {}; //Nest.js=>Err1Problem Here!!
  usersService = new UsersService();

  // GET /users?type=client --> []
  @Get()
  getUsers(@Query('type') type: 'admin' | 'client') {
    return this.usersService.getUsers(type);
    //return this.usersService.getUsers(type); //Nest.js=>Err1-Problem Here!!
  }
  // GET /users/:id --> {...}
  @Get(':id')
  getOneUser(@Param('id') id: string) {
    return this.usersService.getOneUser(+id);
  }
  // POST /users
  @Post()
  createOneUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }
  // PUT /users/:id --> {...}
  @Put(':id')
  updateOneUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateUser(+id, updateUserDto);
  }
  // DELETE /users/:id
  @Delete(':id')
  removeOneUser(@Param('id') id: string) {
    return this.usersService.removeUser(+id);
  }
}
