import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

interface IMessage {
  message: string;
  payload?: any;
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
  create(@Body() payload: any): IMessage {
    return {
      message: 'Post method',
      payload,
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any): IMessage {
    return {
      message: `Put method in ProductId: ${id}`,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number): IMessage {
    return {
      message: `Delete method in ProductId: ${id}`,
    };
  }
}
