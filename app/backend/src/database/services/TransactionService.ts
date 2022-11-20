import { Sequelize } from 'sequelize';
import Accounts from '../models/AccountsModel';
import Transactions from '../models/TransactionsModel';
import UserService from './UserService';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('../config/config');

export default class TransactionService {
  private userService: UserService;
  private sequelize: Sequelize;

  constructor() {
    this.userService = new UserService();
    this.sequelize = new Sequelize(config);
  }

  // eslint-disable-next-line max-lines-per-function
  createTransaction = async (
    value: number,
    debitedAccountId: number,
    creditedAccountId: number,
  ) => {
    const transaction = await this.sequelize.transaction();
    try {
      const prevDebitedAccBalance = Number(await this.userService.checkBalance(debitedAccountId));
      const newDebitedAccBalance = prevDebitedAccBalance + value;
      const prevCreditedAccBalance = Number(await this.userService.checkBalance(creditedAccountId));
      const newCreditedAccBalance = prevCreditedAccBalance + value;
      const newTransaction = await Transactions.create({
        debitedAccountId, creditedAccountId, value, createdAt: new Date(),
      }, { transaction });
      await Accounts.update(
        { balance: newDebitedAccBalance },
        { where: { accountId: creditedAccountId }, transaction },
      );
      await Accounts.update(
        { balance: newCreditedAccBalance },
        { where: { accountId: debitedAccountId }, transaction },
      );

      transaction.commit();
      return newTransaction;
    } catch (e) {
      await transaction.rollback();
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
