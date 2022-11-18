import { Router } from 'express';
import TransactionController from '../controllers/TransactionController';

const TransactionRouter = Router();

const { findUserTransactions } = new TransactionController();

TransactionRouter.get('/:id', findUserTransactions);

export default TransactionRouter;
