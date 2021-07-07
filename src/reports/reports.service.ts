import { Injectable } from '@nestjs/common';

@Injectable()
export class ReportsService {
  getCountryReport(): string {
    return 'country';
  }
  getStateReport(): string {
    return 'state';
  }
}
