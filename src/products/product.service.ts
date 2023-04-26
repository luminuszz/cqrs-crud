import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateProductCommand } from './commands/create-product.command';
import { DeleteProductCommand } from './commands/delete-product.command';
import { Product } from './product.entity';
import { GetProductByIdQuery } from './queries/get-product-by-id.query';

@Injectable()
export class ProductService {
  constructor(
    private readonly comandBuss: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  async createProduct(data: any) {
    return this.comandBuss.execute(new CreateProductCommand(data));
  }

  async deleteProduct(id: string) {
    await this.comandBuss.execute(new DeleteProductCommand(id));
  }

  async getProductById(id: string): Promise<Product> {
    return this.queryBus.execute(new GetProductByIdQuery(id));
  }
}
