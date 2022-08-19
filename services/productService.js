const productModel = require('../models/productModel');
const productValidations = require('../middlewares/validations/productValidations');

const productService = {
  getAll: async () => productModel.getAll(),

  getById: async (id) => {
    const exists = await productValidations.checkIfExists(id);
    if (exists) {
      const selectedProduct = await productModel.getById(id);
      return selectedProduct;
    }
  },
  
  newProduct: async (newProduct) => {
    const checkName = productValidations.checkName(newProduct);
    const product = await productModel.newProduct(checkName);
    return product;
  },
};

module.exports = productService;
