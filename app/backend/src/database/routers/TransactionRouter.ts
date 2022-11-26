import { Router } from 'express';
import { checkIfAccountExist, checkAccountId } from '../../middlewares/transactionMiddlewares';
import isBalanceEnough from '../../middlewares/isBalanceEnough';
import validateToken from '../../middlewares/validateToken';
import TransactionController from '../controllers/TransactionController';

const TransactionRouter = Router();

const { findUserTransactions, newTransaction } = new TransactionController();

TransactionRouter.get('/:id', validateToken, findUserTransactions);
TransactionRouter.post(
  '/',
  validateToken,
  checkIfAccountExist,
  checkAccountId,
  isBalanceEnough,
  newTransaction,
);
export default TransactionRouter;
