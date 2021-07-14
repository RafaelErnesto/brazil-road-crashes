import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Crash, CrashDocument } from './schemas/crash.schema';

@Injectable()
export class ReportsService {

  constructor( @InjectModel(Crash.name) private crashModel: Model<CrashDocument> ){};

  getCountryReport(): string {
    return 'country';
  }
  getStateReport(): string {
    return 'state';
  }
  getCityReport(): string {
    return 'state';
  }
  getReasonReport(): string {
    return 'state';
  }
  getResultReport(): string {
    return 'state';
  }
}
