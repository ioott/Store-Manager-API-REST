const { expect } = require('chai');
const { describe } = require('mocha');
const Sinon = require('sinon');
const saleModel = require('../../../models/saleModel');
const saleService = require('../../../services/saleService');

describe('GET ALL - saleService', () => {
    afterEach(() => {
      Sinon.restore();
    });

    it('retorna array', async function () {
      const resultExecute = [];
      Sinon.stub(saleModel, 'getAll').resolves(resultExecute);
      const result = await saleService.getAll();
      expect(result).to.be.an('array');
    });

    it('retorna um array vazio', async function () {
      const resultExecute = [];
      Sinon.stub(saleModel, 'getAll').resolves(resultExecute);
      const result = await saleService.getAll();
      expect(result).to.be.empty;
    });

    it('retorna um array cheio', async function () {
      const resultExecute = [{ id: 1, name: 'test' }];
      Sinon.stub(saleModel, 'getAll').resolves([resultExecute]);
      const result = await saleService.getAll();
      expect(result).to.be.not.empty;
    });

    it('retorna um array que contenha objetos', async function () {
      const resultExecute = [{ id: 1, name: 'test' }];
      Sinon.stub(saleModel, 'getAll').resolves(resultExecute);
      const [result] = await saleService.getAll();
      expect({ result }).to.be.an('object');
      expect(result).to.all.keys('saleId', 'date', 'productId', 'quantity');
    });
})
