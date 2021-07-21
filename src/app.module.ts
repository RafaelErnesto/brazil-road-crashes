import { Module } from '@nestjs/common';
import { ReportsModule } from './reports/reports.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [ReportsModule, MongooseModule.forRoot('mongodb://localhost/nest')],
})
export class AppModule {}
