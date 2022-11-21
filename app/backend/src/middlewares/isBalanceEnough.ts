import { NextFunction, Request, Response } from 'express';
import UserService from '../database/services/UserService';

const isBalanceEnough = async (req: Request, res: Response, next: NextFunction) => {
  const { value, debitedAccountId } = req.body;
  const { checkBalance } = new UserService();
  const balance = await checkBalance(debitedAccountId);
  if (balance.balance < value) return res.status(401).json({ message: 'Transaction refused' });
  next();
};

export default isBalanceEnough;
