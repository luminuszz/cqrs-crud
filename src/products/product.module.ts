import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { CqrsModule } from '@nestjs/cqrs';
import { ProductRepository } from './product.repository';
import { ProductSaga } from './sagas/product.saga';
import { Product } from './product.entity';
import { ProductsHandler } from './handlers';
import { ProductCommands } from './commands';
import { ProductQueries } from './queries';
import { ProductEvents } from './events';

@Module({
  imports: [CqrsModule],
  providers: [
    ...ProductQueries.register(),
    ...ProductsHandler.register(),
    ...ProductCommands.register(),
    ...ProductEvents.register(),

    Product,
    ProductService,
    ProductRepository,

    ProductSaga,
  ],
  exports: [ProductService],
})
export class ProductModule {}
