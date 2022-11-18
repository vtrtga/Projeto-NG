import { Router } from 'express';
import validateToken from '../../middlewares/validateToken';
import { validateUserRegistration, isAnExistentUser } from '../../middlewares/userMiddlewares';
import UserCrontroller from '../controllers/UserController';

const UserRouter = Router();
const { create, getUser, checkBalance } = new UserCrontroller();

UserRouter.get('/', getUser);
UserRouter.post('/register', validateUserRegistration, isAnExistentUser, create);
UserRouter.get('/balance/:id', validateToken, checkBalance);

export default UserRouter;
