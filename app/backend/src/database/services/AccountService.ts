import Accounts from '../models/AccountsModel';

export default class AccountService {
  findAccount = async (id: string) => {
    const account = await Accounts.findByPk(id);
    return account;
  };
}
