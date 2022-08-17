const productModel = require('../models/productModel');
const validations = require('../middlewares/validations');

const productService = {
  getAll: async () => productModel.getAll(),

  getById: async (id) => {
    const exists = await validations.checkIfExists(id);
    if (exists) {
      const selectedProduct = await productModel.getById(id);
      return selectedProduct;
    }
  },
  newProduct: async (newProduct) => {
    const checkName = validations.checkName(newProduct);
    const product = await productModel.newProduct(checkName);
    return product;
  },
};

module.exports = productService;
