const { expect } = require('chai');
const { describe } = require('mocha');
const Sinon = require('sinon');
const productController = require('../../../controllers/productController');
const productService = require('../../../services/productService');

describe('GET ALL - productController', () => {
  describe('Caso não haja erro', () => {

    afterEach(() => {
      Sinon.restore();
    });

    it('retorna status 200', async function () {
      const req = {};
      const res = {};
      res.status = Sinon.stub().returns(res);
      res.json = Sinon.stub().returns();
      const resultExecute = [];
      Sinon.stub(productService, 'getAll').resolves(resultExecute);

      await productController.getAll(req, res);

      expect(res.status.calledWith(200)).to.be.equal(true);
    });

    it('retorna um array vazio', async function () {
      const req = {};
      const res = {};
      res.status = Sinon.stub().returns(res);
      res.json = Sinon.stub().returns();
      const resultExecute = [];
      Sinon.stub(productService, 'getAll').resolves(resultExecute);

      await productController.getAll(req, res);

      expect(res.json.calledWith([])).to.be.equal(true);
    });

    it('é chamado', async function () {
      const req = {};
      const res = {};
      res.status = Sinon.stub().returns(res);
      res.json = Sinon.stub().returns();
      const resultExecute = [];
      Sinon.stub(productService, 'getAll').resolves(resultExecute);

      await productController.getAll(req, res);

      expect(res.status.calledOnce).to.be.true;
    });
  })
})
