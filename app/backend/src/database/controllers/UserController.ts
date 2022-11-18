import { Request, Response } from 'express';
import UserService from '../services/UserService';

export default class UserCrontroller {
  private readonly userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  getUser = async (req: Request, res: Response) => {
    const { username } = req.body;
    const user = await this.userService.getUser(username);

    return res.status(200).json(user);
  };

  create = async (req: Request, res: Response) => {
    const newUser = await this.userService.create(req.body);
    return res.status(201).json(newUser);
  };

  checkBalance = async (req: Request, res:Response) => {
    const { id } = req.params;
    const userBalance = await this.userService.checkBalance(id);

    return res.status(200).json(userBalance);
  };
}
