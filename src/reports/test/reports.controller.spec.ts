import { Test, TestingModule } from '@nestjs/testing';
import { ReportsController } from '../reports.controller';
import { ReportsService } from '../reports.service';

describe('ReportsController testing', () => {
  let reportsController: ReportsController;
  let reportsService: ReportsService;

  beforeEach(() => {
    reportsService = new ReportsService();
    reportsController = new ReportsController(reportsService);
  });

  it('Ensure getCountryReport returns correctly', async () => {
    const result = 'any_data';
    jest
      .spyOn(reportsService, 'getCountryReport')
      .mockImplementation(() => result);
    expect(await reportsController.getCountryReport()).toBe(result);
  });
});
