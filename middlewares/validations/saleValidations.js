const Joi = require('joi');
const saleModel = require('../../models/saleModel');

const saleValidations = {
  checkIfExists: async (id) => {
    const exists = await saleModel.getById(id);

    if (!exists || exists.length === 0) {
      const err = new Error('404|Product not found');
      throw err;
    }
    return exists;
  },

  checkFields: (obj) => {
    const schema = Joi.object({
      productId: Joi.number().required(),
      quantity: Joi.number().required().min(1),
    });
    const { error, value } = schema.validate(obj);

    if (error) {
      const lowQtt = '"quantity" must be greater than or equal to 1';
      const noQtt = '"quantity" is required';
      const noProduct = '"productId" is required';

      switch (error.message) {
        case noQtt: throw new Error('400|"quantity" is required');
        case lowQtt: throw new Error('422|"quantity" must be greater than or equal to 1');
        case noProduct: throw new Error('400|"productId" is required');
        default: return undefined;
      }
    }
    return value;
  },
};

module.exports = saleValidations;
