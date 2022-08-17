const productModel = require('../models/productModel');

const validations = {
  checkIfExists: async (id) => {
    const exists = await productModel.getById(id);
    if (!exists) {
      const err = new Error('Product not found');
      err.code = 404;
      throw err;
    }
    return exists;
  },
};

module.exports = validations;
