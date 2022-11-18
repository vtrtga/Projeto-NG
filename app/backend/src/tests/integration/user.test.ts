import chai from 'chai';
import * as sinon from 'sinon';

import chaiHttp from 'chai-http';
import app from '../../app'
import { Response } from 'superagent';
import Users from '../../database/models/UsersModel';
import { invalidPasswordUser, invalidUsername, newUser, userMock, validUser } from '../mocks/userMocks';
import { expect } from 'chai';
chai.use(chaiHttp);

describe('Testando login', function () {
  afterEach(() => {
    (Users.findOne as sinon.SinonStub).restore();
  });
  it('Testa se é possível fazer login com sucesso', async function () {
    sinon.stub(Users, "findOne").resolves(userMock as Users);
    let chaiHttpResponse: Response;

    chaiHttpResponse = await chai
    .request(app)
    .post('/login')
    .send(validUser)

    expect(chaiHttpResponse.status).to.be.eq(200);
  });

  it('Testa se não é possível fazer login com senha incorreta', async function () {
    sinon.stub(Users, 'findOne').resolves(invalidPasswordUser as Users);
    let chaiHttpResponse: Response;

    chaiHttpResponse = await chai
    .request(app)
    .post('/login')
    .send(invalidPasswordUser)

    expect(chaiHttpResponse.status).to.be.deep.eq(401);
  });

  it('Testa se não é possível fazer login com usuário incorreto', async function () {
    sinon.stub(Users, "findOne").resolves(invalidUsername as Users);
    let chaiHttpResponse: Response;

    chaiHttpResponse = await chai
    .request(app)
    .post('/login')
    .send(invalidUsername)


  });
});

describe('Testando registro de usuário', function () {
  let chaiHttpResponse: Response;

  afterEach(() => {
    (Users.create as sinon.SinonStub).restore();
  });

  it('Testa se é possivel cadastrar usuário com sucesso', async function () {
    sinon.stub(Users, 'create').resolves(newUser as Users);

    chaiHttpResponse = await chai
    .request(app)
    .post('/users/register')
    .send(newUser);

    expect(chaiHttpResponse.status).to.be.eq(201);
  })
})