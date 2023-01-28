import { Controller, Get, Param, Query } from '@nestjs/common';

interface IMessage {
  message: string;
}

@Controller('categories')
export class CategoriesController {
  @Get(':categoryId/products/:productId')
  getCategory(
    @Param('categoryId') categoryId: string,
    @Param('productId') productId: string,
    @Query('offset') offset = 0,
    @Query('limit') limit = 0,
  ): IMessage {
    return {
      message: `Category: ${categoryId}, Product: ${productId}, Offset: ${offset}, Limit: ${limit}`,
    };
  }
}
