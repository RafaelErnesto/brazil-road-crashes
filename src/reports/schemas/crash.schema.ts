import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type CrashDocument = Crash & Document;

@Schema()
export class Crash {
  @Prop()
  state: string;

  @Prop()
  road_number: number;

  @Prop()
  city: string;

  @Prop()
  crash_cause: string;

  @Prop()
  crash_type: string;

  @Prop()
  crash_class: string;

  @Prop()
  day_phase: string;

  @Prop()
  date: string;

  @Prop()
  weather: string;

  @Prop()
  deaths: number;

  @Prop()
  light_injuries: number;

  @Prop()
  serious_injuries: number;
}

export const CrashSchema = SchemaFactory.createForClass(Crash);
