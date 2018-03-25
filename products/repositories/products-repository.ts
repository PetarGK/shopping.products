import { Product } from '../objects/product'
import { DynamoDB } from 'aws-sdk'

const options = {
    region: "localhost",
    endpoint: "http://localhost:8000"
};

const dynamoDb = process.env.IS_OFFLINE ? new DynamoDB.DocumentClient(options) : new DynamoDB.DocumentClient();

export class ProductsRepo {
    public async getProducts(count: number) : Promise<Product[]> {
        let req = {
            TableName: process.env.PRODUCTS_TABLE_NAME,
            Limit: count
        };
        let resp = await dynamoDb.scan(req).promise();
        return <Product[]>resp.Items;        
    } 
}

