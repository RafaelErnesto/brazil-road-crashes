import { MongoClient } from 'mongodb';
import { ReportsController } from '../reports.controller';
import { ReportsService } from '../reports.service';


describe('ReportsController testing', () => {
  const sut: ReportsController = new ReportsController(new ReportsService());
  let db;
  beforeAll(async () => {
    const connection = await MongoClient.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await connection.db();
  });

  beforeEach(async () => {
    const crashes = db.collection('crashes');
    const mockData = [
      {
        _id: '1012870',
        uf: 'DF',
        br: 70,
        municipio: 'BRASILIA',
        causa_acidente: 'Outras',
        tipo_acidente: 'Colisão traseira',
        classificacao_acidente: 'Com Vítimas Feridas',
        fase_dia: 'Pleno dia',
        data_inversa: '25/11/2008',
        condicao_metereologica: 'Ceu Claro',
        mortos: 1,
        feridos_leves: 2,
        feridos_graves: 0,
      },
      {
        _id: '1049033',
        uf: 'DF',
        br: 20,
        municipio: 'BRASILIA',
        causa_acidente: 'Outras',
        tipo_acidente: 'Colisão traseira',
        classificacao_acidente: 'Com Vítimas Feridas',
        fase_dia: 'Pleno dia',
        data_inversa: '22/11/2008',
        condicao_metereologica: 'Chuvoso',
        mortos: 0,
        feridos_leves: 1,
        feridos_graves: 0,
      },
    ];

    await crashes.insertMany(mockData);
  });

  afterEach(async () => {
    await db.collection('crashes').remove({});
  });

  afterAll(async () => {
    db.close();
  });

  it('Ensure getCountryReport returns correctly', async () => {
    const result = await sut.getCountryReport();
    console.log(result);
    expect(result.length).toBe(2);
  });

  /*it('Ensure getReportByState returns correctly', async () => {
    const result = 'any_data';
    jest
      .spyOn(reportsService, 'getStateReport')
      .mockImplementation(() => result);
    expect(await reportsController.getReportByState()).toBe(result);
  });

  it('Ensure getReportByCity returns correctly', async () => {
    const result = 'any_data';
    jest
      .spyOn(reportsService, 'getCityReport')
      .mockImplementation(() => result);
    expect(await reportsController.getReportByCity()).toBe(result);
  });

  it('Ensure getReportByReason returns correctly', async () => {
    const result = 'any_data';
    jest
      .spyOn(reportsService, 'getReasonReport')
      .mockImplementation(() => result);
    expect(await reportsController.getReportByReason()).toBe(result);
  });

  it('Ensure getReportByResult returns correctly', async () => {
    const result = 'any_data';
    jest
      .spyOn(reportsService, 'getResultReport')
      .mockImplementation(() => result);
    expect(await reportsController.getReportByResult()).toBe(result);
  });*/
});
