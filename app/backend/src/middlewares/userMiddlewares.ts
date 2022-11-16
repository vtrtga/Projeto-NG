import { NextFunction, Request, Response } from 'express';
import { createUserSchema } from '../validations/schemas';
import UserService from '../database/services/UserService';

const validateUserRegistration = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  console.log(body);
  const { error } = createUserSchema.validate(body);

  console.log(error?.details[0]);

  if (error) {
    return res.status(401).json({ message: error.details[0].message });
  }

  next();
};

const isAnExistentUser = async (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body;
  const userService = new UserService();

  const user = await userService.getUser(username);

  if (user) return res.status(401).json({ message: 'User already exist' });

  next();
};

export { isAnExistentUser, validateUserRegistration };
