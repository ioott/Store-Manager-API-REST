const saleModel = require('../models/saleModel');
const saleValidations = require('../middlewares/validations/saleValidations');

const saleService = {
  getAll: async () => {
    const data = await saleModel.getAll();
    const allSales = data.map((sale) => {
      const newData = {
        saleId: sale.sale_id,
        date: sale.date,
        productId: sale.product_id,
        quantity: sale.quantity,
      };
      return newData;
    });
    return allSales;
  },

  getById: async (id) => {
    const exists = await saleValidations.checkIfExists(id);
    if (exists) {
      const data = await saleModel.getById(id);
      const selectedSale = data.map((sale) => {
        const newData = {
          date: sale.date,
          productId: sale.product_id,
          quantity: sale.quantity,
        };
        return newData;
      });
      return selectedSale;
    }
  },

  newSale: async (body) => {
    await Promise.all(body.map(async (item) => {
      saleValidations.checkFields(item);
      return saleValidations.checkIfExists(item.productId);
    }));
    const saleId = await saleModel.newSale();
    await saleModel.productsNewSale(saleId, body);
    return { id: saleId, itemsSold: body };
  },
};

module.exports = saleService;
