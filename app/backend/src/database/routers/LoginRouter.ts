import { Router } from 'express';
import findUser from '../../middlewares/loginMiddlewares';
import LoginController from '../controllers/LoginController';

const { login } = new LoginController();
const loginRouter = Router();

loginRouter.post('/', findUser, login);

export default loginRouter;
