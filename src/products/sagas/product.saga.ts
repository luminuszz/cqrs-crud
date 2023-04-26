import { Injectable, Logger } from '@nestjs/common';
import { ofType, Saga } from '@nestjs/cqrs';
import { map, Observable } from 'rxjs';
import { ProductCreatedEvent } from '../events/product-created.event';

@Injectable()
export class ProductSaga {
  private logger = new Logger(ProductSaga.name);

  @Saga()
  userHasCreated = (events$: Observable<unknown>) =>
    events$.pipe(
      ofType(ProductCreatedEvent),
      map((event) =>
        this.logger.log(`product has create by id ${event.props.id}`),
      ),
    );
}
