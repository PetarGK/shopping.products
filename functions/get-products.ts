import { Product } from '../products/objects/product'
import { ProductsRepo } from '../products/repositories/products-repository'
import { ProductsService } from '../products/services/products-service'
import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';

const count: number = 10;
const repo: ProductsRepo = new ProductsRepo();
const service: ProductsService = new ProductsService(repo);

export const handler: Handler = async (event: APIGatewayEvent, context: Context, cb: Callback) => {
 
  try {
    let products: Product[] = await service.getProducts(count);

    const response = {
      statusCode: 200,
      body: JSON.stringify(products)
    };
  
    cb(null, response);    
  }
  catch(err) {
    const error = {
      statusCode: 500,
      name: 'error getting products',
      message: err.message
    };
  
    cb(error, null); 
  }
}