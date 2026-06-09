import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class TripType {
  @Field(() => ID)
  id!: string;

  @Field()
  title!: string;

  @Field()
  destination!: string;

  @Field()
  startDate!: string;

  @Field()
  endDate!: string;

  @Field({ nullable: true })
  userId?: string;
}
