import { Product } from '../objects/product'
import { ProductsRepo } from '../repositories/products-repository'
import { ProductsService } from './products-service'
import { expect } from 'chai'
import * as TypeMoq from 'typemoq';
import 'mocha'

describe('Test products service', () => {
    const repo = TypeMoq.Mock.ofType(ProductsRepo);
    const id1 = "123", id2 = "456";
    let products: Product[] = [
        { id: id1, name: "test", description: "ala bala", price: 1.23 },
        { id: id2, name: "test2", description: "ala bala 2", price: 12.5 }
    ];

    beforeEach(() => {
        repo.setup(x => x.getProducts(TypeMoq.It.isAnyNumber())).returns(() => Promise.resolve(products));
    });

    it('should return products', async () => {
        let service = new ProductsService(repo.object);
        let products: Product[] = await service.getProducts(1);

        expect(products).to.be.not.null;
        expect(products.length).to.be.eq(2);
        expect(products[0].id).to.be.eq(id1);
    });
});