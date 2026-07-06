import { Test, TestingModule } from '@nestjs/testing';
import { MaterialesService } from './materiales.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Material } from './material.entity';
import { DataSource } from 'typeorm';
import { AuditoriaService } from '../auditoria/auditoria.service';

describe('MaterialesService', () => {
  let service: MaterialesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MaterialesService,
        { provide: getRepositoryToken(Material), useValue: { find: jest.fn(), save: jest.fn() } },
        { provide: DataSource, useValue: {} },
        { provide: AuditoriaService, useValue: { registrar: jest.fn() } },
      ],
    }).compile();

    service = module.get<MaterialesService>(MaterialesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});