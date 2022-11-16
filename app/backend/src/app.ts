import express from 'express';
import loginRouter from './database/routers/LoginRouter';

const app = express();

app.use(express.json());
app.use('/', loginRouter);

export default app;
