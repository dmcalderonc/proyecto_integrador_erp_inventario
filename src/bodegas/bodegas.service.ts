import { Injectable } from '@nestjs/injectable';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, EntityManager } from 'typeorm';
import { Bodega } from './entities/bodega.entity';
import { CreateBodegaDto } from './dto/create-bodega.dto';

@Injectable()
export class BodegasService {
  constructor(
    @InjectRepository(Bodega)
    private readonly bodegaRepository: Repository<Bodega>,
  ) {}

  // Permite guardar usando el manager de una transacción externa si existe
  async create(createBodegaDto: CreateBodegaDto, transactionalManager?: EntityManager): Promise<Bodega> {
    const repository = transactionalManager ? transactionalManager.getRepository(Bodega) : this.bodegaRepository;
    const nuevaBodega = repository.create(createBodegaDto);
    return await repository.save(nuevaBodega);
  }

  async findAll(): Promise<Bodega[]> {
    return await this.bodegaRepository.find();
  }

  async findOne(id: number): Promise<Bodega> {
    return await this.bodegaRepository.findOne({ where: { id } });
  }
}