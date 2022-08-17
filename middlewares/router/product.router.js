const express = require('express');

const productRoute = express.Router();
const productController = require('../../controllers/productController');

productRoute.get('/', productController.getAll);
productRoute.get('/:id', productController.getById);
productRoute.post('/', productController.newProduct);

module.exports = productRoute;
