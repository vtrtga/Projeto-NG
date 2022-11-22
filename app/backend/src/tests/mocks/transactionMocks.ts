const validTransaction = {
  value: 50,
  creditedAccountId: 1,
  debitedAccountId: 2
};

const invalidTransaction = {
  value: 100000,
  creditedAccountId: 1,
  debitedAccountId: 2
}

export { validTransaction, invalidTransaction };