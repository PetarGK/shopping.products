'use strict';
const dynamodb = require('serverless-dynamodb-client').doc;
const tableName = process.env.PRODUCTS_TABLE_NAME;

class ProductsRepo {
    constructor() {
        this.dynamodb = dynamodb;
        this.tableName = tableName; 
      }

    *getProducts(count) {
        let req = {
            TableName: this.tableName,
            Limit: count
        };
        
        let resp = yield this.dynamodb.scan(req).promise();
        return resp.Items;        
    }    
}