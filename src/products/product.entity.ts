import { AggregateRoot } from '@nestjs/cqrs';
import { ProductCreatedEvent } from './events/product-created.event';

export type ProductsProps = {
  id: string;
  name: string;
  description: string;
  price: number;
};

export class Product extends AggregateRoot {
  constructor(private readonly props: ProductsProps) {
    super();
  }

  public get id(): string {
    return this.props.id;
  }

  public set id(id: string) {
    this.props.id = id;
  }

  public get name(): string {
    return this.props.name;
  }

  public set name(name: string) {
    this.props.name = name;
  }

  public get description(): string {
    return this.props.description;
  }

  public set description(description: string) {
    this.props.description = description;
  }

  public get price(): number {
    return this.props.price;
  }

  public set price(price: number) {
    this.props.price = price;
  }

  public create(newProduct: Product) {
    this.apply(new ProductCreatedEvent(newProduct));
  }
}
