import { ObjectType, Int, Field } from '@nestjs/graphql'

@ObjectType()
export class PostType {
  @Field(() => Int)
  id: number

  @Field()
  createdAt: Date

  @Field()
  updatedAt: Date

  @Field()
  title: string

  @Field({ nullable: true })
  content?: string

  @Field()
  published: boolean
}
