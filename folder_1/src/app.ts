import express, { Application, Request, Response } from 'express';
import { todoRouter } from './todos/todo.route';

const app: Application = express();

// Middleware to parse JSON body
app.use(express.json());

app.use('/todo', todoRouter);
app.use('/todos', todoRouter);

app.get('/', (req, res) => {
  res.send('Server is running...');
});

export default app;
