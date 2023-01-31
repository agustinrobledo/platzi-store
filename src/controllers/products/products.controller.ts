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

import { ProductService } from 'src/services/product/product.service';
import { Product } from 'src/entities/product.entity';

interface IMessage {
  message: string;
  payload?: any;
}

@Controller('products')
export class ProductsController {

  constructor(private ProductService: ProductService) { }

  @Get() GetAllProducts(
    @Query('offset') offset = 0,
    @Query('limit') limit = 0,
  ): Product[] {
    return this.ProductService.findAll()
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  GetProductById(@Param('productId') productId: string): Product {
    return this.ProductService.findOne(Number(productId))
  }

  @Post()
  @HttpCode(HttpStatus.OK)
  create(@Body() payload: any): Product {
    return this.ProductService.create(payload)

  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: string, @Body() payload: any): Product {
    return this.ProductService.update(Number(id), payload)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  delete(@Param('id') id: number): boolean {
    return this.ProductService.delete(Number(id))
  }
}
