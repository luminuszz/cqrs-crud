import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProductService } from './products/product.service';
import { ProductsProps } from './products/product.entity';

type CreateProdductDto = ProductsProps;

@Controller()
export class AppController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async createProduct(@Body() data: CreateProdductDto) {
    await this.productService.createProduct(data);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string) {
    await this.productService.deleteProduct(id);
  }

  @Get(':id')
  async getProduct(@Param('id') id: string) {
    return this.productService.getProductById(id);
  }
}
