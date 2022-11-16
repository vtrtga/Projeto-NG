import chai from 'chai';
import * as sinon from 'sinon';

import chaiHttp from 'chai-http';
import app from '../../app'
import { Response } from 'superagent';
import Users from '../../database/models/UsersModel';
import { userMock, validUser } from '../mocks/userMocks';
import { expect } from 'chai';
chai.use(chaiHttp);

describe('Testando login', function () {
  let chaiHttpResponse: Response;
  afterEach(() => {
    (Users.findOne as sinon.SinonStub).restore();
  }) 
  it('Testa se é possível fazer login com sucesso', async function () {
    sinon.stub(Users, "findOne").resolves(userMock as Users);

    chaiHttpResponse = await chai
    .request(app)
    .post('/login')
    .send(validUser)

    expect(chaiHttpResponse.status).to.be.eq(200);
  });
});