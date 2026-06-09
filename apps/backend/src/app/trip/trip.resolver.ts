import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { TripService } from './trip.service';
import { TripType } from './trip.type';
import { JwtAuthGuard } from '../auth/jwt/jwt.guard';

@Resolver()
export class TripResolver {
  constructor(private tripService: TripService) {}

  @Query(() => [TripType])
  @UseGuards(JwtAuthGuard)
  trips() {
    return this.tripService.findAll();
  }

  @Mutation(() => TripType)
  createTrip(
    @Args('title') title: string,
    @Args('destination') destination: string,
    @Args('startDate') startDate: string,
    @Args('endDate') endDate: string,
  ) {
    return this.tripService.create({
      title,
      destination,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
    });
  }
}
