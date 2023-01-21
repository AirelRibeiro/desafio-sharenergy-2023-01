import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './auth/localAuth/local-auth.guard';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    const { user } = req;
    return this.authService.login(user.name, user._id);
  }
}
