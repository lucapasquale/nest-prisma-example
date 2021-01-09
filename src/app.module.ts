import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { PostService } from './post.service';
import { PrismaService } from './prisma.service';
import { UserService } from './user.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService, UserService, PostService],
})
export class AppModule {}
