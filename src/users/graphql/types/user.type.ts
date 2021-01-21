import { ObjectType, ID, Field } from '@nestjs/graphql'

@ObjectType()
export class UserType {
  @Field(() => ID)
  id: number

  @Field()
  createdAt: Date

  @Field()
  updatedAt: Date

  @Field()
  name: string

  @Field()
  email: string
}
