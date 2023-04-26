import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeleteProductCommand } from '../commands/delete-product.command';
import { ProductRepository } from '../product.repository';

@CommandHandler(DeleteProductCommand)
export class DeleteProductHandler
  implements ICommandHandler<DeleteProductCommand>
{
  constructor(private readonly productRepository: ProductRepository) {}

  async execute({ id }: DeleteProductCommand): Promise<void> {
    await this.productRepository.delete(id);
  }
}
