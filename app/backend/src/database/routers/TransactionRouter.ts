import { Router } from 'express';
import TransactionController from '../controllers/TransactionController';

const TransactionRouter = Router();

const { findUserTransactions, newTransaction } = new TransactionController();

TransactionRouter.get('/:id', findUserTransactions);
TransactionRouter.put('/', newTransaction);
export default TransactionRouter;
