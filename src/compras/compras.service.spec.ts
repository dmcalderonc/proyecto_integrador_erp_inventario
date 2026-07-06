import { Test, TestingModule } from '@nestjs/testing';
import { ComprasService } from './compras.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { OrdenCompra } from './entities/orden-compra.entity'; // Ajusta la ruta
import { MovimientosService } from '../movimientos/movimientos.service'; // Ajusta la ruta

describe('ComprasService', () => {
  let service: ComprasService;

  // 1. Definimos los mocks para las dependencias
  const mockOrdenCompraRepository = {
    find: jest.fn(),
    findOne: jest.fn(),
    save: jest.fn(),
    create: jest.fn(),
  };

  const mockMovimientosService = {
    dispararMovimiento: jest.fn(),
  };

  const mockAuditLogModel = {}; // Si es un provider inyectado sin métodos necesarios para el test

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ComprasService,
        {
          provide: getRepositoryToken(OrdenCompra),
          useValue: mockOrdenCompraRepository,
        },
        {
          provide: MovimientosService,
          useValue: mockMovimientosService,
        },
        {
          provide: 'AuditLogModel', // Nombre tal cual aparezca en el constructor
          useValue: mockAuditLogModel,
        },
      ],
    }).compile();

    service = module.get<ComprasService>(ComprasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // Ejemplo de cómo probar un método:
  it('debe llamar a find de repositorio', async () => {
    mockOrdenCompraRepository.find.mockResolvedValue([]);
    await service.findAll();
    expect(mockOrdenCompraRepository.find).toHaveBeenCalled();
  });
});