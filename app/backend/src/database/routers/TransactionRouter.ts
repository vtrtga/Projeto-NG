import { Router } from 'express';
import isBalanceEnough from '../../middlewares/isBalanceEnough';
import validateToken from '../../middlewares/validateToken';
import TransactionController from '../controllers/TransactionController';

const TransactionRouter = Router();

const { findUserTransactions, newTransaction } = new TransactionController();

TransactionRouter.get('/:id', validateToken, findUserTransactions);
TransactionRouter.put('/', validateToken, isBalanceEnough, newTransaction);
export default TransactionRouter;
