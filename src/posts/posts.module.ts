import { Module } from '@nestjs/common'

import { PrismaService } from '../prisma.service'

import { UserPostsResolver } from './graphql/resolvers/user-posts.resolver'
import { PostsService } from './posts.service'

@Module({
  providers: [PrismaService, PostsService, UserPostsResolver],
})
export class PostsModule {}
