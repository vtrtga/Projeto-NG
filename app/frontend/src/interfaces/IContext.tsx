interface IUserInfo {
  accountId: number;
  id: number;
  username: string;
}

export default interface IContext {
  user: IUserInfo | {};
  setUser: (user: any) => void;
  balance: number;
  setBalance: (balance: any) => void;
}