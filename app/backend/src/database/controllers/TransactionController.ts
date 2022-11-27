import { Request, Response } from 'express';
import TransactionService from '../services/TransactionService';

export default class TransactionController {
  transactionService: TransactionService;

  constructor() {
    this.transactionService = new TransactionService();
  }

  public findUserTransactions = async (req: Request, res: Response) => {
    const { id } = req.params;
    const transactions = await this.transactionService.findUserTransactions(id);
    return res.status(200).json(transactions);
  };

  public newTransaction = async (req: Request, res: Response) => {
    const { value, creditedAccountId, debitedAccountId } = req.body;
    const transaction = await this.transactionService.createTransaction(
      value,
      debitedAccountId,
      creditedAccountId,
    );

    return res.status(201).json(transaction);
  };
}
