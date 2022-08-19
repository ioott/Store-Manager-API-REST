const { expect } = require('chai');
const { describe } = require('mocha');
const Sinon = require('sinon');
const connection = require('../../../models/connection');
const saleModel = require('../../../models/saleModel');

describe('GET ALL - saleModel', () => {
    afterEach(() => {
      Sinon.restore();
    });

    it('retorna array', async function () {
      const resultExecute = [];
      Sinon.stub(connection, 'execute').resolves([resultExecute]);
      const result = await saleModel.getAll();
      expect(result).to.be.an('array');
    });

    it('retorna um array vazio', async function () {
      const resultExecute = [];
      Sinon.stub(connection, 'execute').resolves([resultExecute]);
      const result = await saleModel.getAll();
      expect(result).to.be.empty;
    });

    it('retorna um array cheio', async function () {
      const resultExecute = [{ id: 1, name: 'test' }];
      Sinon.stub(connection, 'execute').resolves([resultExecute]);
      const result = await saleModel.getAll();
      expect(result).to.be.not.empty;
    });

    it('retorna um array que contenha objetos', async function () {
      const resultExecute = [{ id: 1, name: 'test' }];
      Sinon.stub(connection, 'execute').resolves([resultExecute]);
      const [result] = await saleModel.getAll();
      expect(result).to.be.an('object');
      expect(result).to.all.keys('name', 'id');
    });
})
