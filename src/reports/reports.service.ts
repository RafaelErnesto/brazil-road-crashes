import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Crash, CrashDocument } from './schemas/crash.schema';

@Injectable()
export class ReportsService {
  constructor(
    @InjectModel(Crash.name) private crashModel: Model<CrashDocument>,
  ) {}

  async getCountryReport(): Promise<any> {
    return await this.crashModel.find({});
  }
}
