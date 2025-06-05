import express from 'express';

export const todoRouter = express.Router();

todoRouter.get('/', (req, res) => {
  res.send('This is from todos Router');
});
