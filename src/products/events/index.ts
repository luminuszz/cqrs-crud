import { Provider } from '@nestjs/common';
import { ProductCreatedEvent } from './product-created.event';

export class ProductEvents {
  static register(): Provider[] {
    return [ProductCreatedEvent];
  }
}
