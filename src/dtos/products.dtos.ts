export interface CreateProductDto {
  readonly name: string
  readonly description: string
  readonly price: number
  readonly stock: number
  readonly image: string
}

export interface UpdateProductDto {
  readonly name?: string
  readonly description?: string
  readonly price?: number
  readonly stock?: number
  readonly image?: string
}
