import { Injectable } from '@nestjs/common';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async all(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async get(id: number): Promise<Product> {
    return this.productRepository.findOne({ id });
  }

  async create(product: Product): Promise<Product> {
    return this.productRepository.save(product);
  }

  async update(id: number, product: Product): Promise<UpdateResult> {
    return this.productRepository.update(id, product);
  }

  async delete(id): Promise<DeleteResult> {
    return this.productRepository.delete(id);
  }
}
