import { NextFunction, Request, Response } from 'express';
import { loginSchema } from '../validations/schemas';
import LoginService from '../database/services/LoginService';

const findUser = async (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  const service = new LoginService();
  service.login(req.body);
  const { error } = loginSchema.validate(body);

  if (error) return res.status(400).json({ message: 'All fields must be filled' });

  next();
};

export default findUser;
