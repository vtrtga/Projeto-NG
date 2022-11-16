import { NextFunction, Request, Response } from 'express';
import { createUserSchema } from '../validations/schemas';
import UserService from '../database/services/UserService';

const validateUserRegistration = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  const { error } = createUserSchema.validate(body);
  // if(error.details[0].message)

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

  if (user) return res.status(401).json({ message: 'User already exist' });

  next();
};

export { isAnExistentUser, validateUserRegistration };
