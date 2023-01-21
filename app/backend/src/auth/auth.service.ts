import { Injectable } from '@nestjs/common';
import { UserDocument } from 'src/schemas/user.schema';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { Md5 } from 'md5-typescript';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    username: string,
    pass: string,
  ): Promise<UserDocument | null> {
    const user = await this.usersService.findByUserName(username);
    const password = Md5.init(pass);
    if (user && user.password === password) {
      return user;
    }
    return null;
  }

  async login(name: string, id: string) {
    const payload = { name, id };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
