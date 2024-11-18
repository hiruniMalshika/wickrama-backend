import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  // Find all products
  findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  // Create a new product
  create(product: Product): Promise<Product> {
    return this.productRepository.save(product);
  }
}
