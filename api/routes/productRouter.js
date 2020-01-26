const express = require('express');
const controller = require('../controllers/products');
const validateProductData = require('../middleware/validateSingleProduct');

const productRouter = express.Router();

productRouter
  .route('/products')
  .post(validateProductData, controller.addProduct);

module.exports = productRouter;
