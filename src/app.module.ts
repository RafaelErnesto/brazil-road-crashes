import { Module } from '@nestjs/common';
import { ReportsModule } from './reports/reports.module';
import { MongooseModule } from '@nestjs/mongoose';

const url = process.env.MONGO_URL || 'localhost';
const user = process.env.MONGO_USER;
const pwd = process.env.MONGO_PASSWORD;
@Module({
  imports: [
    ReportsModule,
    MongooseModule.forRoot(
      `mongodb://${user}:${pwd}@${url}:27017/crash-api?authSource=admin`,
    ),
  ],
})
export class AppModule {}
