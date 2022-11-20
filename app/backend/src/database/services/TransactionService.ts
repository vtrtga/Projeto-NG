import * as Sequelize from 'sequelize';
import sequelize from 'sequelize';
import Accounts from '../models/AccountsModel';
import Transactions from '../models/TransactionsModel';
import UserService from './UserService';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('../config/config');

export default class TransactionService {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  // eslint-disable-next-line max-lines-per-function
  createTransaction = async (
    value: number,
    debitedAccountId: number,
    creditedAccountId: number,
  ) => {
    try {
      const newTransaction = await Transactions.create({
        debitedAccountId, creditedAccountId, value,
      });

      await Accounts.update(
        { balance: +value },
        { where: { accountId: creditedAccountId } },
      );

      await Accounts.update(
        { balance: -value },
        { where: { accountId: debitedAccountId } },
      );

      return newTransaction;
    } catch (e) {
      throw new Error('Transaction failed');
    }
  };

  findUserTransactions = async (accountId: string) => {
    const transactions = await Transactions.findAll(
      { where: { creditedAccountId: accountId } && { debitedAccountId: accountId } },
    );
    return transactions;
  };
}
