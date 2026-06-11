import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { TripService } from './trip.service';
import { TripType } from './trip.type';
import { JwtAuthGuard } from '../auth/jwt/jwt.guard';
import { CreateTripDto } from './dto/create-trip.dto';
import { UpdateTripDto } from './dto/update-trip.dto';

@Resolver()
export class TripResolver {
  constructor(private tripService: TripService) {}

  @Query(() => [TripType])
  @UseGuards(JwtAuthGuard)
  trips() {
    return this.tripService.findAll();
  }

  @Query(() => TripType, { nullable: true })
  @UseGuards(JwtAuthGuard)
  trip(@Args('id', { type: () => ID }) id: string) {
    return this.tripService.findOne(id);
  }

  @Mutation(() => TripType)
  @UseGuards(JwtAuthGuard)
  createTrip(@Args('input') input: CreateTripDto) {
    return this.tripService.create(input);
  }

  @Mutation(() => TripType, { nullable: true })
  @UseGuards(JwtAuthGuard)
  updateTrip(@Args('input') input: UpdateTripDto) {
    return this.tripService.update(input);
  }

  @Mutation(() => TripType, { nullable: true })
  @UseGuards(JwtAuthGuard)
  deleteTrip(@Args('id', { type: () => ID }) id: string) {
    return this.tripService.delete(id);
  }
}
