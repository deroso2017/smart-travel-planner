import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Trip, TripDocument } from './trip.schema';

@Injectable()
export class TripService {
  constructor(@InjectModel(Trip.name) private tripModel: Model<TripDocument>) {}

  create(data: Partial<Trip>) {
    return this.tripModel.create(data);
  }

  findAll() {
    return this.tripModel.find();
  }
}
