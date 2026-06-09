import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { AuthUser } from './auth-user.type';
import { UserDocument } from '../user/user.schema';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  async register(input: { email: string; password: string }) {
    const existingUser = await this.userService.findByEmail(input.email);

    if (existingUser) {
      throw new UnauthorizedException('User already exists');
    }

    const user = await this.userService.create(input);

    return this.signToken(this.toAuthUser(user));
  }

  async login(input: { email: string; password: string }) {
    const user = await this.userService.findByEmail(input.email);

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isValid = await this.userService.comparePassword(
      input.password,
      user.password,
    );

    if (!isValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return this.signToken(this.toAuthUser(user));
  }

  signToken(user: AuthUser) {
    return {
      accessToken: this.jwtService.sign({
        sub: user.id,
        email: user.email,
      }),
    };
  }

  private toAuthUser(user: UserDocument): AuthUser {
    return {
      id: user.id.toString(),
      email: user.email,
    };
  }
}
