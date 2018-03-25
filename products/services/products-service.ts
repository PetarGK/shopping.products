import { Product } from '../objects/product'
import { ProductsRepo } from '../repositories/products-repository'

class ProductsService {
    private repo: ProductsRepo;

    constructor(repo: ProductsRepo) {
        this.repo = repo;
    }

    public async getProducts(): Promise<Product[]> {

        return;
    }
}