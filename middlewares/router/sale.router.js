const express = require('express');

const saleRoute = express.Router();
const saleController = require('../../controllers/saleController');

saleRoute.get('/', saleController.getAll);
saleRoute.get('/:id', saleController.getById);
saleRoute.post('/', saleController.newSale);

module.exports = saleRoute;
