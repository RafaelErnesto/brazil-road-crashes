import { Module } from '@nestjs/common';
import { ReportsModule } from './reports/reports.module';
import { MongooseModule } from '@nestjs/mongoose';

const url = process.env.MONGO_URL || 'localhost';
@Module({
  imports: [
    ReportsModule,
    MongooseModule.forRoot(`mongodb://${url}:27017/api`),
  ],
})
export class AppModule {}
