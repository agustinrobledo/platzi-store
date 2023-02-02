import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dtos'
import { Product } from 'src/entities/product.entity'

@Injectable()
export class ProductService {
  private counterId = 1
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description:
        'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
      price: 122,
      stock: 12,
      image: 'image',
    },
  ]

  findAll() {
    return this.products
  }

  findOne(id: number) {
    const product = this.products.find((item) => item.id === id)
    if (!product) {
      // This throws an error with status code: 404
      throw new NotFoundException(`Product with id: ${id} not found`)
    }
    return product
  }

  create(payload: CreateProductDto) {
    this.counterId = this.counterId + 1
    const newProduct: Product = {
      id: this.counterId,
      ...payload,
    }
    this.products.push(newProduct)
    return newProduct
  }

  update(id: number, payload: UpdateProductDto) {
    const product = this.findOne(id)

    if (product) {
      const index = this.products.findIndex((item) => item.id === id)
      this.products[index] = {
        ...product,
        ...payload,
      }
      return this.products[index]
    }
    return null
  }

  delete(id: number) {
    const index = this.products.findIndex((item) => item.id === id)
    if (index === -1) {
      // This throws an error with status code: 404
      throw new NotFoundException(`Product with id: ${id} not found`)
    }
    this.products.splice(index, 1)
    return true
  }
}
