import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import loginRouter from './database/routers/LoginRouter';
import UserRouter from './database/routers/UserRouter';
import AccountRouter from './database/routers/AccountRouter';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Hello!',
  });
});
app.use('/login', loginRouter);
app.use('/users', UserRouter);
app.use('/accounts', AccountRouter);

export default app;
