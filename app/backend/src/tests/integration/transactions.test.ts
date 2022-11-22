import chai from 'chai';
import * as Sinon from 'sinon';
import chaiHttp from 'chai-http';
import Transactions from '../../database/models/TransactionsModel';
import { Response } from 'superagent';
import app from '../../app';
import { validTransaction } from '../mocks/transactionMocks';

describe('Testando transações', function() {
  let chaiHttpResponse: Response;
  afterEach(async () => {
    (Transactions.create as sinon.SinonStub).restore();
  });

  // beforeEach(async () => {
  //   chaiHttpResponse = await chai
  //   .request(app)
  //   .post('/login')
  //   const {  } = chaiHttpResponse;
  // })
  it('Testa se é possível fazer uma transação com sucesso', async function() {
    Sinon.stub(Transactions, 'create').resolves(validTransaction as Transactions);

    chaiHttpResponse = await chai
    .request(app)
    .put('/transactions')
    .send(validTransaction);
  });
});