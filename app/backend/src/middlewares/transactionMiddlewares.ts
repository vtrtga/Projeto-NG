import { NextFunction, Request, Response } from 'express';
import AccountService from '../database/services/AccountService';

const checkIfAccountExist = async (req: Request, res: Response, next: NextFunction) => {
  const { creditedAccountId } = req.body;
  const accountService = new AccountService();
  const account = await accountService.findAccount(creditedAccountId);

  if (!account) return res.status(404).json({ message: 'Account does not exist' });

  next();
};

const checkAccountId = (req: Request, res: Response, next: NextFunction) => {
  const { debitedAccountId, creditedAccountId } = req.body;

  if (debitedAccountId === creditedAccountId) {
    return res.status(401).json({ message: 'Unable to transafer to own account' });
  }
  next();
};

export { checkIfAccountExist, checkAccountId };
