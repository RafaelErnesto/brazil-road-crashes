import request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';

import {
  closeInMongodConnection,
  rootMongooseTestModule,
} from '../test-utils/mongo/MongooseTestModule';
import { AppModule } from '../src/app.module';
import { ReportsModule } from '../src/reports/reports.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CrashSchema } from '../src/reports/schemas/crash.schema';
import { ReportsService } from '../src/reports/reports.service';

describe('Reports routes', () => {
  let app: INestApplication;
  let service: ReportsService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [
        rootMongooseTestModule(),
        MongooseModule.forFeature([{ name: 'Crash', schema: CrashSchema }]),
      ],
      providers: [ReportsService],
    }).compile();

    //service = module.get<ReportsService>(ReportsService);

    app = moduleRef.createNestApplication();
    await app.init();
  });

  beforeEach(async () => {
    //const crashes = db.collection('crashes');
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

    // await crashes.insertMany(mockData);
  });

  afterEach(async () => {
    //await db.collection('crashes').remove({});
  });

  it(`/reports/country`, async () => {
    const response = await request(app.getHttpServer())
      .get('/reports/country')
      .expect(200);
    console.log(response);
  });

  afterAll(async () => {
    await app.close();
    await closeInMongodConnection();
  });
});
