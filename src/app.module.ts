import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'

import { PostsModule } from './posts/posts.module'
import { UsersModule } from './users/users.module'

@Module({
  imports: [
    GraphQLModule.forRoot({
      introspection: true,
      sortSchema: true,
      autoSchemaFile: true,
    }),

    UsersModule,
    PostsModule,
  ],
})
export class AppModule {}
