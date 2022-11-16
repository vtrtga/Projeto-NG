import { Router } from 'express';
import UserCrontroller from '../controllers/UserController';

const UserRouter = Router();
const userControlller = new UserCrontroller();

UserRouter.get('/', userControlller.getUser);
UserRouter.post('/create', userControlller.create);

export default UserRouter;
