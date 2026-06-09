import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { UserDto } from '../user/dto/user.dto';
import { AuthResponse } from './auth-response.type';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => AuthResponse)
  async register(@Args('input') input: UserDto) {
    return this.authService.register(input);
  }

  @Mutation(() => AuthResponse)
  async login(@Args('input') input: UserDto) {
    return this.authService.login(input);
  }
}
