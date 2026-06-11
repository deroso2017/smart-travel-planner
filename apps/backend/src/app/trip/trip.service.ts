import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Trip, TripDocument } from './trip.schema';
import { CreateTripDto } from './dto/create-trip.dto';
import { UpdateTripDto } from './dto/update-trip.dto';

@Injectable()
export class TripService {
  constructor(@InjectModel(Trip.name) private tripModel: Model<TripDocument>) {}

  create(dto: CreateTripDto) {
    return this.tripModel.create(dto);
  }

  findAll() {
    return this.tripModel.find();
  }

  findOne(id: string) {
    return this.tripModel.findById(id);
  }

  update(dto: UpdateTripDto) {
    return this.tripModel.findByIdAndUpdate(dto.id, dto, { new: true });
  }

  delete(id: string) {
    return this.tripModel.findByIdAndDelete(id);
  }
}
