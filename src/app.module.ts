import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProductModule } from './products/product.module';

@Module({
  imports: [ProductModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
