const express = require('express');
const controller = require('../controllers/products');
const validateProductData = require('../middleware/validateSingleProduct');

const productRouter = express.Router();

productRouter
  .route('/products/:id?')
  .delete(controller.deleteProduct)
  .post(validateProductData, controller.addProduct)
  .get(controller.getProducts);

module.exports = productRouter;
