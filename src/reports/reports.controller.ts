import { Controller, Get } from '@nestjs/common';
import { ReportsService } from './reports.service';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('country')
  getCountryReport(): string {
    return this.reportsService.getCountryReport();
  }

  @Get('state')
  getReportByState(): string {
    return this.reportsService.getCountryReport();
  }

  @Get('city')
  getReportByCity(): string {
    return this.reportsService.getCountryReport();
  }

  @Get('reason')
  getReportByReason(): string {
    return this.reportsService.getCountryReport();
  }

  @Get('result')
  getReportByResult(): string {
    return this.reportsService.getCountryReport();
  }
}
