import { Module } from '@nestjs/common'

import { PrismaService } from '../prisma.service'

import { UsersResolver } from './graphql/resolvers/users.resolver'
import { UsersService } from './users.service'

@Module({
  providers: [PrismaService, UsersService, UsersResolver],
})
export class UsersModule {}
