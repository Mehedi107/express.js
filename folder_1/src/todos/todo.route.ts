import express, { Request, Response } from 'express';

export const todoRouter = express.Router();

todoRouter.get('/', (req, res) => {
  res.send('This is from todos Router');
});

todoRouter.post('/todo/create', async (req: Request, res: Response) => {
  const title = req.body.title;
});

// async (req: Request, res: Response) => {
//   const { title } = req.body;
//   const result = await collection().insertOne({ title, completed: false });
//   res.status(201).json(result.ops?.[0] || { _id: result.insertedId, title, completed: false });
// };
