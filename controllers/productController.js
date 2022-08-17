const productService = require('../services/productService');

const productController = {
  getAll: async (req, res) => {
    const allProducts = await productService.getAll();
    return res.status(200).json(allProducts);
  },
  getById: async (req, res) => {
    const selectedProduct = await productService.getById(req.params.id);
    return res.status(200).json(selectedProduct);
  },
};

module.exports = productController;
