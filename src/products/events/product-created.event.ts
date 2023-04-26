import { ProductsProps } from '../product.entity';

export class ProductCreatedEvent {
  constructor(public readonly props: ProductsProps) {}
}
