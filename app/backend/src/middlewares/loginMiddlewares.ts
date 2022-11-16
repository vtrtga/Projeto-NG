import { NextFunction, Request, Response } from 'express';
import { loginSchema } from '../validations/schemas';
import LoginService from '../database/services/LoginService';

const validateFields = async (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  console.log(body);
  const { error } = loginSchema.validate(body);
  if (error) return res.status(400).json({ message: 'All fields must be filled' });

  next();
};

const findUser = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  const loginService = new LoginService();
  const user = loginService.login(body);
  if (!user) return res.status(401).json({ message: 'Incorrect email or password' });

  next();
};

export { findUser, validateFields };
