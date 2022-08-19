const express = require('express');
require('express-async-errors');
const productRoute = require('./middlewares/router/product.router');
const saleRoute = require('./middlewares/router/sale.router');

const app = express();
app.use(express.json());

app.use('/products', productRoute);
app.use('/sales', saleRoute);

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use((err, req, res, _next) => {
  const [code, message] = err.message.split('|');
  return res.status(code).json({ message });
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação
module.exports = app;
