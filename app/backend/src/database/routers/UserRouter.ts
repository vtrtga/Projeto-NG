import { Router } from 'express';
import { validateUserRegistration, isAnExistentUser } from '../../middlewares/userMiddlewares';
import UserCrontroller from '../controllers/UserController';

const UserRouter = Router();
const userControlller = new UserCrontroller();

UserRouter.get('/', userControlller.getUser);
UserRouter.post('/create', validateUserRegistration, isAnExistentUser, userControlller.create);

export default UserRouter;
