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

  // checkIfNameExists: (obj) => {
  //   const schema = Joi.object({
  //     name: Joi.string().required(),
  //   });
  //   const { err, value } = schema.validate(obj);
  //   if (err) {
  //     err.code = 400;
  //     err.message = '"name" is required';
  //     throw err;
  //   }
  //   return value;
  // },

  // checkNameQtt: (obj) => {
  //   const schema = Joi.object({
  //     name: Joi.min(5),
  //   });
  //   const { err, value } = schema.validate(obj);
  //   if (err) {
  //     err.code = 422;
  //     err.message = '"name" length must be at least 5 characters long';
  //     throw err;
  //   }
  //   return value;
  // },
};

module.exports = validations;
