import { Controller, Get } from '@nestjs/common';
import { ReportsService } from './reports.service';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('country')
  getCountryReport(): string {
    return this.reportsService.getCountryReport();
  }

  @Get('state:state')
  getReportByState(): string {
    return this.reportsService.getStateReport();
  }

  @Get('city:city')
  getReportByCity(): string {
    return this.reportsService.getCityReport();
  }

  @Get('reason:reason')
  getReportByReason(): string {
    return this.reportsService.getReasonReport();
  }

  @Get('result:result')
  getReportByResult(): string {
    return this.reportsService.getResultReport();
  }
}
