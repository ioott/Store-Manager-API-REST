const db = require('./connection');

const productModel = {
  getAll: async () => {
    const sql = 'SELECT * FROM StoreManager.products ORDER BY id';
    const [allProducts] = await db.execute(sql);
    return allProducts;
  },
  getById: async (id) => {
    const sql = 'SELECT * FROM StoreManager.products WHERE id = ?';
    const [[selectedProduct]] = await db.execute(sql, [id]);
    return selectedProduct;
  },
  newProduct: async (newProduct) => {
    const { name } = newProduct;
    const sql = 'INSERT INTO StoreManager.products (name) VALUES (?)';
    const [{ insertId }] = await db.execute(sql, [name]);
    return insertId;
  },
};

module.exports = productModel;
