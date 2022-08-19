const db = require('./connection');

const saleModel = {
  getAll: async () => {
    const sql = `SELECT * FROM StoreManager.sales_products AS t1
    INNER JOIN StoreManager.sales AS t2
    ON t1.sale_id = t2.id
    ORDER BY sale_id, product_id`;
    const [allSales] = await db.execute(sql);
    return allSales;
  },

  getById: async (id) => {
    const sql = `SELECT * FROM StoreManager.sales AS t1
    INNER JOIN StoreManager.sales_products AS t2
    ON t1.id = t2.sale_id
    WHERE t1.id = ?`;
    const [selectedSale] = await db.execute(sql, [id]);
    return selectedSale;
  },

  newSale: async () => {
    const sql = 'INSERT INTO StoreManager.sales () VALUES ()';
    const [{ insertId }] = await db.execute(sql);
    return insertId;
  },
  productsNewSale: async (saleId, body) => {
    const sql = `INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity)
    VALUES (?, ?, ?)`;
    await Promise.all(body.map((item) => db
      .execute(sql, [saleId, item.productId, item.quantity])));
  },
};

module.exports = saleModel;
