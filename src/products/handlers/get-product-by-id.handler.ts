import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetProductByIdQuery } from '../queries/get-product-by-id.query';
import { Product } from '../product.entity';
import { ProductRepository } from '../product.repository';

@QueryHandler(GetProductByIdQuery)
export class GetProductByIdHandler
  implements IQueryHandler<GetProductByIdQuery>
{
  constructor(private readonly productRepository: ProductRepository) {}

  async execute({ id }: GetProductByIdQuery): Promise<Product | null> {
    return this.productRepository.findById(id);
  }
}
