import { Controller, Get, Param, Post, Query } from '@nestjs/common';

interface IMessage {
  message: string;
}

@Controller('products')
export class ProductsController {
  @Get()
  GetAllProducts(
    @Query('offset') offset = 0,
    @Query('limit') limit = 0,
  ): IMessage {
    return {
      message: `Products, Offset: ${offset}, Limit: ${limit}`,
    };
  }

  @Get(':productId')
  GetProductById(@Param('productId') productId: string): IMessage {
    return {
      message: `Product: ${productId}`,
    };
  }

  @Post()
  create(): IMessage {
    return {
      message: 'Post method',
    };
  }
}
