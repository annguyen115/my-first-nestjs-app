import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  async all(): Promise<Product[]> {
    return this.productService.all();
  }

  @Get(':id')
  async get(@Param('id') id: number) {
    return this.productService.get(id);
  }

  @Post()
  async create(
    @Body('title') title: string,
    @Body('image') image: string,
  ): Promise<Product> {
    const product = new Product();
    product.image = image;
    product.title = title;
    return this.productService.create(product);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body('title') title: string,
    @Body('image') image: string,
  ) {
    const product = new Product();
    product.image = image;
    product.title = title;
    return this.productService.update(id, product);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.productService.delete(id);
  }
}
