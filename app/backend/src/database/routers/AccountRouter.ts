import { Router } from 'express';
import AccountController from '../controllers/AccountController';

const { findAccount } = new AccountController();
const AccountRouter = Router();

AccountRouter.get('/:id', findAccount);

export default AccountRouter;
