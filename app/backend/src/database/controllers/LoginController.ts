import { Request, Response } from 'express';
import LoginService from '../services/LoginService';
import bcryptCompare from '../../utils/Bcrypt';
import tokenGenerator from '../../utils/tokenGenerator';

export default class LoginController {
  private readonly loginService: LoginService;

  constructor() {
    this.loginService = new LoginService();
  }

  login = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const result = await this.loginService.login(req.body);

    if (!result) throw new Error('Incorrect username or password');

    const comparePassword = await bcryptCompare(password, result.password);

    if (!comparePassword) {
      return res.status(401).json({ message: 'Incorrect username or password' });
    }

    const token = tokenGenerator(username);

    return res.status(200).json({ token });
  };
}
