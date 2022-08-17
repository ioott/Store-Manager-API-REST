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
  newProduct: async (req, res) => {
    const id = await productService.newProduct(req.body);
    const { name } = req.body;
    return res.status(201).json({ id, name });
  },
};

module.exports = productController;
