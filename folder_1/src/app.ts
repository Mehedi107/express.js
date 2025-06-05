import express, { Application, Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { todoRouter } from './todos/todo.route';

const app: Application = express();

const filePath = path.resolve(__dirname, '../db/todosData.json');

// Middleware to parse JSON body
app.use(express.json());

app.use('/todo', todoRouter);

export default app;
