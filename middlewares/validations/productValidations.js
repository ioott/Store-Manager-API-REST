const Joi = require('joi');
const productModel = require('../../models/productModel');

const productValidations = {
  checkIfExists: async (id) => {
    const exists = await productModel.getById(id);
    if (!exists) {
      const err = new Error('404|Product not found');
      throw err;
    }
    return exists;
  },

  checkName: (obj) => {
    const schema = Joi.object({
      name: Joi.string().min(5).required(),
      //   .messages({
      //   'any.required': '400|"name" is required',
      //   'string.min': '422|"name" length must be at least 5 characters long',
      // }),
    });
    const { error, value } = schema.validate(obj);

    if (error) {
      const noName = '"name" is required';
      const minChar = '"name" length must be at least 5 characters long';

      switch (error.message) {
        case noName: throw new Error('400|"name" is required');
        case minChar: throw new Error('422|"name" length must be at least 5 characters long');
        default: return undefined;
      }
      // throw error;
    }
    return value;
  },
};

module.exports = productValidations;
