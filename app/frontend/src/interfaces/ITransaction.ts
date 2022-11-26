export default interface ITransaction {
  value: number;
  creditedAccountId: number;
  debitedAccountId: number;
}