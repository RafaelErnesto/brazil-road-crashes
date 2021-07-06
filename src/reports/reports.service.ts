import { Injectable } from '@nestjs/common';

@Injectable()
export class ReportsService {
  getCountryReport(): string {
    return 'hello';
  }
}
