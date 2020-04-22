import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interfaces/user.interface';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

  // fetch all users
  async getAllUsers(): Promise<User[]> {
    const users = await this.userModel.find().exec();
    return users;
  }

  // post a single user
  async addUser(createUserDTO: CreateUserDTO): Promise<User> {
    const newUser = new this.userModel(createUserDTO);
    return newUser.save();
  }

  // find one
  async findOne(email: string): Promise<User> {
    const user = await this.userModel.findOne({
      where: {
        email: email
      }
    });
    return user;
  }
}
