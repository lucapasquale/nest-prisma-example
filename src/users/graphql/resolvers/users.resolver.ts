import { Resolver, Query, Args, Int } from '@nestjs/graphql'

import { UsersService } from '../../users.service'
import { UserType } from '../types/user.type'

@Resolver()
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => UserType, { nullable: true })
  async user(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.findById(id)
  }
}
