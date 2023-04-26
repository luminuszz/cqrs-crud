import { Provider } from '@nestjs/common';
import { CreateProductCommand } from './create-product.command';
import { DeleteProductCommand } from './delete-product.command';

export class ProductCommands {
  static register(): Provider[] {
    return [CreateProductCommand, DeleteProductCommand];
  }
}
