import { CreateProductHandler } from './create-product.handler';
import { DeleteProductHandler } from './delete-product.handler';
import { GetProductByIdHandler } from './get-product-by-id.handler';
import { ProductHasCreatedEventHandler } from './product-has-created-event.handler';
import { Provider } from '@nestjs/common';

export class ProductsHandler {
  static register(): Provider[] {
    return [
      CreateProductHandler,
      DeleteProductHandler,
      GetProductByIdHandler,
      ProductHasCreatedEventHandler,
    ];
  }
}
