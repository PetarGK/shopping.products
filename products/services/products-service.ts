import { Product } from '../objects/product'
import { ProductsRepo } from '../repositories/products-repository'

export class ProductsService {

    constructor(private _repo: ProductsRepo) { }

    public async getProducts(count: number): Promise<Product[]> {
        // validate count

        return await this._repo.getProducts(count);
    }
}