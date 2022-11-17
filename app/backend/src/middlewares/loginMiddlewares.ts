import { NextFunction, Request, Response } from 'express';
import { loginSchema } from '../validations/schemas';
import LoginService from '../database/services/LoginService';
import bcryptCompare from '../utils/Bcrypt';

const validateFields = async (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  const { error } = loginSchema.validate(body);
  if (error) return res.status(400).json({ message: 'All fields must be filled' });

  next();
};

const findUser = async (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  const { password } = body;
  const loginService = new LoginService();
  const user = await loginService.login(body);

  if (!user) {
    return res.status(401).json({ message: 'Incorrect username or password' });
  }

  const comparePassword = await bcryptCompare(password, user.password);

  if (!comparePassword) {
    return res.status(401).json({ message: 'Incorrect username or password' });
  }

  next();
};

export { findUser, validateFields };
