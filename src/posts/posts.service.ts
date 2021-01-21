import { Injectable } from '@nestjs/common'
import { Post } from '@prisma/client'

import { PrismaService } from '../prisma.service'

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async findByUserId(userId: number): Promise<Post[]> {
    return this.prisma.post.findMany({
      where: { userId },
    })
  }
}
