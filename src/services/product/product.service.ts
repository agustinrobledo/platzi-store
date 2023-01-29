import { Injectable } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';

@Injectable()
export class ProductService {
  private counterId = 1
  private products: Product[] = [{
    id: 1,
    name: "Product 1",
    description: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    price: 122,
    stock: 12,
    image: "image"
  }]

  findAll() {
    return this.products
  }

  findOne(id: number) {
    return this.products.find(item => item.id === id)
  }

  create(payload: Product) {
    this.counterId = this.counterId + 1
    const newProduct: Product = {
      id: this.counterId,
      ...payload,
    }
    this.products.push(newProduct)
    return newProduct
  }
}
