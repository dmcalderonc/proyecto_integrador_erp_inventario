import { Test, TestingModule } from '@nestjs/testing';
import { ComprasController } from './compras.controller';
import { ComprasService } from './compras.service';
import { getModelToken } from '@nestjs/mongoose'; // Importa esto
import { getRepositoryToken } from '@nestjs/typeorm'; // Importa esto
import { OrdenCompra } from './entities/orden-compra.entity'; // Asegúrate de la ruta

describe('ComprasController', () => {
  let controller: ComprasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComprasController],
      providers: [
        {
          provide: ComprasService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            recibirOrden: jest.fn(),
            remove: jest.fn(),
          },
        },
        // Debes mockear los tokens que el servicio necesita si hubiera una cadena de inyección directa
        // o simplemente asegurar que el mock del servicio está bien configurado.
      ],
    }).compile();
    controller = module.get<ComprasController>(ComprasController);
  });

  // ¡IMPORTANTE! Agrega al menos un test para evitar el error de "suite vacía"
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});