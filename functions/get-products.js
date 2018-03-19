'use strict';

const co = require('co');
const dynamodb = require('serverless-dynamodb-client').doc;
const ProductsService = require('../services/products-service');

const limit = process.env.defaultResults || 8;
const tableName = process.env.PRODUCTS_TABLE_NAME;

let service = new ProductsService(dynamodb, tableName);

module.exports.handler = co.wrap(function* (event, context, cb) {
  let products = yield service.getProducts(limit);

  let response = {
    statusCode: 200,
    body: JSON.stringify(products)
  }

  cb(null, response);
});