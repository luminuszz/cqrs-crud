import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { ProductCreatedEvent } from '../events/product-created.event';

@EventsHandler(ProductCreatedEvent)
export class ProductHasCreatedEventHandler
  implements IEventHandler<ProductCreatedEvent>
{
  async handle({ props }: ProductCreatedEvent): Promise<void> {
    console.log(`product has create by id ${props.id}`);
  }
}
