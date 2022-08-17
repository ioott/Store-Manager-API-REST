const express = require('express');
const productController = require('./controllers/productController');
require('express-async-errors');

const app = express();
app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', productController.getAll);
app.get('/products/:id', productController.getById);
app.post('/products', productController.newProduct);

app.use((err, req, res, _next) => {
  const { code, message } = err;
  res.status(code).json({ message });
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação
module.exports = app;
