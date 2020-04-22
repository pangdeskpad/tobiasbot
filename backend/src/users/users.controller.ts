import { Controller, Get, Res, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) { }

  @Post('/create')
  async addUser(@Res() res, @Body() createUserDTO: CreateUserDTO) {
    const user = await this.usersService.addUser(createUserDTO);
    return res.status(HttpStatus.OK).json({
      message: "User has been created successfully",
      user
    })
  }

  // Retrieve users list
  @Get('/list')
  async getAll(@Res() res) {
    const users = await this.usersService.getAllUsers();
    return res.status(HttpStatus.OK).json(users);
  }
}
