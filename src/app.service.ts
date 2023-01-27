import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getNewEndpoint(): string {
    return 'Nuevo';
  }

  getEndpointWithParam(product: string): string {
    return `Product: ${product}`;
  }

  getCategory(category, product, offset, limit): string {
    return `Category: ${category}, Product: ${product}, Offset: ${offset}, Limit: ${limit}`;
  }
}
