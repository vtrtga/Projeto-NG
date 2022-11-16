import { sign, SignOptions } from 'jsonwebtoken';

require('dotenv');

const secret = process.env.JWT_SECRET || 'jwt_secret';

const jwtConfig: SignOptions = {
  expiresIn: '24h',
  algorithm: 'HS256',
};

const tokenGenerator = (username: string) => {
  const token = sign({ data: { username } }, secret, jwtConfig);

  return token;
};

export default tokenGenerator;