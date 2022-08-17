const Joi = require('joi');
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

  checkName: (obj) => {
    const schema = Joi.object({
      name: Joi.string().min(5).required().messages({
        'any.required': '400|"name" is required',
        'string.min': '422|"name" length must be at least 5 characters long',
      }),
    });
    const { error, value } = schema.validate(obj);
    if (error) {
      throw error;
    }
    return value;
  },
};

module.exports = validations;
