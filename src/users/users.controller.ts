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
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
import { BeltGuard } from '../belt/belt.guard';

@Controller('users')
@UseGuards(BeltGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {} //For declare one time and use in all document.

  // GET /users?type=client --> []
  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }
  @Get('/clients')
  getUsersClients(@Query('type') type: 'client') {
    return this.usersService.getClients(type);
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
