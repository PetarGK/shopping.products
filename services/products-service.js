class ProductsService {
    constructor(db, tableName) {
      this.db = db;
      this.tableName = tableName; 
    }

    *getProducts(count) {
        let req = {
            TableName: this.tableName,
            Limit: count
        };
        
        let resp = yield this.db.scan(req).promise();
        return resp.Items;        
    }

    *saveProduct(product) {
        //validate product invariants



        // save product
        let request = {
            TableName: this.tableName,
            Item: product
        };        

        yield this.db.put(request).promise();
    }

    *deleteProduct(id) {

    }
  }
  
  module.exports = ProductsService;