import { Request, Response } from 'express';
import LoginService from '../services/LoginService';
import tokenGenerator from '../../utils/tokenGenerator';

export default class LoginController {
  private readonly loginService: LoginService;

  constructor() {
    this.loginService = new LoginService();
  }

  login = async (req: Request, res: Response) => {
    const { username } = req.body;
    const result = await this.loginService.login(req.body);
    if (!result) throw new Error('Service error');

    const token = tokenGenerator(username);

    return res.status(200).json({ token });
  };
}
