import { Request, Response } from 'express';
import AccountService from '../services/AccountService';

export default class AccountController {
  private readonly accountService: AccountService;
  constructor() {
    this.accountService = new AccountService();
  }

  findAccount = async (req: Request, res: Response) => {
    const { id } = req.params;

    const account = await this.accountService.findAccount(id);

    return res.status(200).json(account);
  };
}
