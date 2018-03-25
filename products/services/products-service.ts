import { Product } from '../objects/product'
import { ProductsRepo } from '../repositories/products-repository'

export class ProductsService {
    private repo: ProductsRepo;

    constructor(repo: ProductsRepo) {
        this.repo = repo;
    }

    public async getProducts(count: number): Promise<Product[]> {
        // validate count

        return await this.repo.getProducts(count);
    }
}