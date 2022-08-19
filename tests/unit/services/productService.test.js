const { expect } = require('chai');
const { describe } = require('mocha');
const Sinon = require('sinon');
const productModel = require('../../../models/productModel');
const productService = require('../../../services/productService');

describe('GET ALL - productService', () => {
  describe('Caso não haja erro', () => {

    afterEach(() => {
      Sinon.restore();
    });

    it('retorna array', async function () {
      const resultExecute = [];
      Sinon.stub(productModel, 'getAll').resolves(resultExecute);
      const result = await productService.getAll();
      expect(result).to.be.an('array');
    });

    it('retorna um array vazio', async function () {
      const resultExecute = [];
      Sinon.stub(productModel, 'getAll').resolves(resultExecute);
      const result = await productService.getAll();
      expect(result).to.be.empty;
    });

    it('retorna um array cheio', async function () {
      const resultExecute = [{ id: 1, name: 'test' }];
      Sinon.stub(productModel, 'getAll').resolves([resultExecute]);
      const result = await productService.getAll();
      expect(result).to.be.not.empty;
    });

    it('retorna um array que contenha objetos', async function () {
      const resultExecute = [{ id: 1, name: 'test' }];
      Sinon.stub(productModel, 'getAll').resolves(resultExecute);
      const [result] = await productService.getAll();
      expect({ result }).to.be.an('object');
      expect(result).to.all.keys('id', 'name');
    });
  })
})
