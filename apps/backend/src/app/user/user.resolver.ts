import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserType } from './user.type';
import { UserDto } from './dto/user.dto';

@Resolver(() => UserType)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Mutation(() => UserType)
  async register(@Args('input') input: UserDto) {
    return this.userService.create(input);
  }

  @Query(() => [UserType])
  async users() {
    return this.userService.findAll();
  }

  @Query(() => UserType, { nullable: true })
  async userByEmail(@Args('email') email: string) {
    return this.userService.findByEmail(email);
  }
}
