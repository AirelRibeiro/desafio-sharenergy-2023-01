import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import { Model } from 'mongoose';
import { Md5 } from 'md5-typescript';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<UserDocument> {
    const password = Md5.init(createUserDto.password);
    const createdUser = new this.userModel({ ...createUserDto, password });
    return createdUser.save();
  }

  async findAll(): Promise<UserDocument[]> {
    return this.userModel.find();
  }

  async findOne(id: string): Promise<UserDocument | undefined> {
    return this.userModel.findById(id);
  }

  async update(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<UserDocument> {
    if (updateUserDto.password) {
      const password = Md5.init(updateUserDto.password);
      return this.userModel.findByIdAndUpdate(id, {
        ...updateUserDto,
        password,
      });
    }
    return this.userModel.findByIdAndUpdate(id, { updateUserDto });
  }

  async remove(id: string) {
    return this.userModel.findByIdAndRemove(id);
  }

  async findByUserName(username: string): Promise<UserDocument | undefined> {
    return this.userModel.findOne({ username });
  }
}
