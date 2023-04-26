import { ProductsProps } from '../product.entity';

export class CreateProductCommand {
  constructor(public readonly props: ProductsProps) {}
}
