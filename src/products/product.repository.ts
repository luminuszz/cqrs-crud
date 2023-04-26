import { Product, ProductsProps } from './product.entity';

const products: Product[] = [];

export class ProductRepository {
  async create(props: ProductsProps): Promise<void> {
    products.push(new Product(props));
  }

  async delete(id: string): Promise<void> {
    const index = products.findIndex((product) => product.id === id);

    delete products[index];
  }

  async findById(id: string): Promise<Product | null> {
    return products.find((item) => item.id === id) || null;
  }
}
