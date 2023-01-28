import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('categories/:categoryId/products/:productId')
  getCategory(
    @Param('categoryId') categoryId: string,
    @Param('productId') productId: string,
    @Query('offset') offset = 0,
    @Query('limit') limit = 0,
  ): string {
    return this.appService.getCategory(categoryId, productId, offset, limit);
  }
}
