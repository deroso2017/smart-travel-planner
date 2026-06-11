import { InputType, Field, ID, PartialType } from '@nestjs/graphql';
import { CreateTripDto } from './create-trip.dto';
import { IsString } from 'class-validator';

@InputType()
export class UpdateTripDto extends PartialType(CreateTripDto) {
  @Field(() => ID)
  @IsString()
  id!: string;
}
