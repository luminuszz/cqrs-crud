import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { CreateProductCommand } from '../commands/create-product.command';
import { ProductRepository } from '../product.repository';

@CommandHandler(CreateProductCommand)
export class CreateProductHandler
  implements ICommandHandler<CreateProductCommand>
{
  constructor(
    private readonly productRepository: ProductRepository,
    private readonly publihser: EventPublisher,
  ) {}

  async execute({ props }: CreateProductCommand): Promise<any> {
    await this.productRepository.create(props);

    const product = this.publihser.mergeObjectContext(
      await this.productRepository.findById(props.id),
    );

    product.create(product);

    product.commit();
  }
}
