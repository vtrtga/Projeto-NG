import { Request, Response } from 'express';
import TransactionService from '../services/TransactionService';

export default class TransactionController {
  transactionService: TransactionService;

  constructor() {
    this.transactionService = new TransactionService();
  }

  findUserTransactions = async (req: Request, res: Response) => {
    const { id } = req.params;
    const transactions = await this.transactionService.findUserTransactions(id);
    return res.status(200).json(transactions);
  };
}
