import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Trip, TripSchema } from './trip.schema';
import { TripService } from './trip.service';
import { TripResolver } from './trip.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Trip.name, schema: TripSchema }]),
  ],
  providers: [TripService, TripResolver],
})
export class TripModule {}
