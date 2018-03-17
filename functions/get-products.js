'use strict';

const co = require('co');
const dynamodb = require('serverless-dynamodb-client').doc;
/*const ProductsService = require('../lib/products-service');
const defaultResults = process.env.defaultResults || 8;
const tableName = process.env.PRODUCTS_TABLE_NAME;
let service = new ProductsService(dynamodb.doc);
*/

const defaultResults = process.env.defaultResults || 8;
const tableName = process.env.PRODUCTS_TABLE_NAME;

function* getProducts(count) {
  let req = {
    TableName: tableName,
    Limit: count
  };

  let resp = yield dynamodb.scan(req).promise();
  return resp.Items;
}

module.exports.handler = co.wrap(function* (event, context, cb) {
  let restaurants = yield getProducts(defaultResults);
  let response = {
    statusCode: 200,
    body: JSON.stringify(restaurants)
  }

  cb(null, response);
});