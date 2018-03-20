'use strict';

const co = require('co');
const ProductsRepo = require('../repositories/products-repository');
const ProductsService = require('../services/products-service');

const limit = process.env.defaultResults || 8;

let repo = new ProductsRepo();
let service = new ProductsService(repo);

module.exports.handler = co.wrap(function* (event, context, cb) {
  let products = yield service.getProducts(limit);

  let response = {
    statusCode: 200,
    body: JSON.stringify(products)
  }

  cb(null, response);
});