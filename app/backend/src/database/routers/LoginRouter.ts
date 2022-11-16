import { Router } from 'express';
import { findUser, validateFields } from '../../middlewares/loginMiddlewares';
import LoginController from '../controllers/LoginController';

const { login } = new LoginController();
const loginRouter = Router();

loginRouter.post('/', validateFields, findUser, login);

export default loginRouter;
