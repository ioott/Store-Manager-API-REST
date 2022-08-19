const { expect } = require('chai');
const { describe } = require('mocha');
const Sinon = require('sinon');
const saleController = require('../../../controllers/saleController');
const saleService = require('../../../services/saleService');

describe('GET ALL - saleController', () => {
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
      Sinon.stub(saleService, 'getAll').resolves(resultExecute);

      await saleController.getAll(req, res);

      expect(res.status.calledWith(200)).to.be.equal(true);
    });

    it('retorna um array vazio', async function () {
      const req = {};
      const res = {};
      res.status = Sinon.stub().returns(res);
      res.json = Sinon.stub().returns();
      const resultExecute = [];
      Sinon.stub(saleService, 'getAll').resolves(resultExecute);

      await saleController.getAll(req, res);

      expect(res.json.calledWith([])).to.be.equal(true);
    });

    it('é chamado', async function () {
      const req = {};
      const res = {};
      res.status = Sinon.stub().returns(res);
      res.json = Sinon.stub().returns();
      const resultExecute = [];
      Sinon.stub(saleService, 'getAll').resolves(resultExecute);

      await saleController.getAll(req, res);

      expect(res.status.calledOnce).to.be.true;
    });
  })
})
