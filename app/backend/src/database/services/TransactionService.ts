import Transactions from '../models/TransactionsModel';

export default class TransactionService {
  create = (value: number, debitedAccountId: number, creditedAccountId: number) => {
    const newTransaction = Transactions.create({
      debitedAccountId, creditedAccountId, value,
    });

    return newTransaction;
  };

  findUserTransactions = (accountId: number) => {
    const transactions = Transactions.findAll(
      { where: { creditedAccountId: accountId } }
      && { where: { debitedAccountId: accountId } },
    );

    return transactions;
  };
}
