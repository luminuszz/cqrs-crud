import { GetProductByIdQuery } from './get-product-by-id.query';
import { Provider } from '@nestjs/common';

export class ProductQueries {
  static register(): Provider[] {
    return [GetProductByIdQuery];
  }
}
