import { Test, TestingModule } from '@nestjs/testing';
import { RequirementsService } from './requirements.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Requirement } from './entities/requirement.entity'; // Ajusta la ruta

describe('RequirementsService', () => {
  let service: RequirementsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RequirementsService,
        {
          provide: getRepositoryToken(Requirement),
          useValue: { find: jest.fn(), save: jest.fn(), findOne: jest.fn() },
        },
        {
          provide: DataSource, // Inyectamos la clase real
          useValue: {},
        },
      ],
    }).compile();
    service = module.get<RequirementsService>(RequirementsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});