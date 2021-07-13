import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReportsController } from './reports.controller';
import { ReportsService } from './reports.service';
import { Crash, CrashSchema } from './schemas/crash.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Crash.name, schema: CrashSchema }]),
  ],
  controllers: [ReportsController],
  providers: [ReportsService],
})
export class ReportsModule {}
