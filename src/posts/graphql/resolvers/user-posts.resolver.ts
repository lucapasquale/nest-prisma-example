import { Resolver, ResolveField, Root } from '@nestjs/graphql'

import { UserType } from '~users/graphql/types/user.type'

import { PostsService } from '../../posts.service'
import { PostType } from '../types/post.type'

@Resolver(() => UserType)
export class UserPostsResolver {
  constructor(private postsService: PostsService) {}

  @ResolveField(() => [PostType])
  async posts(@Root() user: UserType) {
    return this.postsService.findByUserId(user.id)
  }
}
