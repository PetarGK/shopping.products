class ProductsService {
    constructor(repo) {
      this.repo = repo; 
    }

    *getProducts(count) {
        // validate count

        return yield this.repo.getProducts(count);
    }

    saveProduct(product) {
        //validate product invariants



        // save product
        let request = {
            TableName: this.tableName,
            Item: product
        };        

        this.db.put(request).promise();
    }

    deleteProduct(id) {

    }
  }
  
  module.exports = ProductsService;