import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  HttpCode,
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
  @Get() GetAllProducts(
    @Query('offset') offset = 0,
    @Query('limit') limit = 0,
  ): IMessage {
    return {
      message: `Get Products, Offset: ${offset}, Limit: ${limit}i`,
    };
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  GetProductById(@Param('productId') productId: string): IMessage {
    return {
      message: `Product: ${productId}.`,
    };
  }

  @Post()
  @HttpCode(HttpStatus.OK)
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
  @HttpCode(HttpStatus.OK)
  delete(@Param('id') id: number): IMessage {
    return {
      message: `Delete method in ProductId: ${id}`,
    };
  }
}
