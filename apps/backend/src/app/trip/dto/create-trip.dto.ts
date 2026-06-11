import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsOptional, IsDateString } from 'class-validator';

@InputType()
export class CreateTripDto {
  @Field()
  @IsString()
  title!: string;

  @Field()
  @IsString()
  destination!: string;

  @Field()
  @IsDateString()
  startDate!: string;

  @Field()
  @IsDateString()
  endDate!: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  userId?: string;
}
