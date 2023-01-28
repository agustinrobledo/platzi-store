import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly appService: AppService) {}

  @Get('products/:productId')
  newEndpointWithParam(@Param('productId') productId: string): string {
    return this.appService.getEndpointWithParam(productId);
  }
}
