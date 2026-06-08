import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TripDocument = HydratedDocument<Trip>;

@Schema({ timestamps: true })
export class Trip {
  @Prop({ required: true })
  title!: string;

  @Prop({ required: true })
  destination!: string;

  @Prop({ required: true })
  startDate!: Date;

  @Prop({ required: true })
  endDate!: Date;

  // IMPORTANT for later (auth)
  @Prop({ required: false })
  userId?: string;
}

export const TripSchema = SchemaFactory.createForClass(Trip);
