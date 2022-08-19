const saleService = require('../services/saleService');

const saleController = {
  getAll: async (req, res) => {
    const allSales = await saleService.getAll();
    return res.status(200).json(allSales);
  },

  getById: async (req, res) => {
    const selectedSale = await saleService.getById(req.params.id);
    return res.status(200).json(selectedSale);
  },

  newSale: async (req, res) => {
    const sale = await saleService.newSale(req.body);
    return res.status(201).json(sale);
  },
};

module.exports = saleController;
