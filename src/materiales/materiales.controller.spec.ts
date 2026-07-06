import { Test, TestingModule } from '@nestjs/testing';
import { MaterialesController } from './materiales.controller';
import { MaterialesService } from './materiales.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

describe('MaterialesController', () => {
  let controller: MaterialesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MaterialesController],
      providers: [
        {
          provide: MaterialesService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    })
      // Aquí ignoramos el guardia de autenticación para que el test no pida token
      .overrideGuard(JwtAuthGuard)
      .useValue({ canActivate: () => true })
      .compile();

    controller = module.get<MaterialesController>(MaterialesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});