import {
  Controller,
  Get,
  Put,
  Post,
  Delete,
  Param,
  Query,
  Body,
  ParseIntPipe,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './user.service';
import { NotFoundException } from '@nestjs/common';
import { BeltGuard } from 'src/belt/belt.guard';

@Controller('users')
@UseGuards(BeltGuard)
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
  getOneUser(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.usersService.getOneUser(id);
    } catch (error) {
      throw new NotFoundException('User Not Found', {
        cause: error,
        description: 'The id not correspond to any User in the data base',
      });
    }
  }
  // POST /users
  @Post()
  createUser(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }
  // PUT /users/:id --> {...}
  @Put(':id')
  updateOneUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.updateUser(id, updateUserDto);
  }
  // DELETE /users/:id
  @Delete(':id')
  removeOneUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.removeUser(id);
  }
}
