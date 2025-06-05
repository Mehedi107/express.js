import express, { Application, Request, Response } from 'express';
import path from 'path';
import fs from 'fs';

const app: Application = express();

const filePath = path.resolve(__dirname, '../db/todosData.json');

// Middleware to parse JSON body
app.use(express.json());

app.get('/todos', (req: Request, res: Response) => {
  const data = JSON.parse(fs.readFileSync(filePath, { encoding: 'utf-8' }));
  console.log(data);
  res.send('Hello World!!!!!!!');
});

app.get('/todo/:id', (req, res) => {
  const id = req.params;
  const query = req.query;
  res.send(query);
});

app.post('/todos/create', (req, res) => {
  const data = req.body;
  res.send(data);
});

export default app;
