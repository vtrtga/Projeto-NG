import { NextFunction, Request, Response } from 'express';
import { createUserSchema } from '../validations/schemas';
import UserService from '../database/services/UserService';

const validateUserRegistration = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  const { error } = createUserSchema.validate(body);

  if (error) {
    if (error?.details[0].type === 'string.pattern.base') {
      return res.status(401).json(
        { message: 'Password must contain as least 8 characters, numbers and an uppercase letter' },
      );
    }

    return res.status(401).json({ message: error.details[0].message });
  }

  next();
};

const isAnExistentUser = async (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body;
  const userService = new UserService();

  const user = await userService.getUser(username);

  if (user) return res.status(409).json({ message: 'User already exist' });

  next();
};

const userExist = async (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.params;
  const userService = new UserService();
  const user = await userService.getUser(username);

  if (!username) return res.status(401).json({ message: 'Empty username' });
  if (!user) return res.status(404).json({ message: 'User not found' });

  next();
};

export { isAnExistentUser, validateUserRegistration, userExist };
