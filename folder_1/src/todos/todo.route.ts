import express, { Request, Response } from 'express';
import { client, getDB } from '../config/mongodb';
import { ObjectId } from 'mongodb';

export const todoRouter = express.Router();

// Save todo
todoRouter.post('/create', async (req: Request, res: Response) => {
  const newTodo = req.body;

  try {
    const db = getDB();
    const result = await db.collection('todos').insertOne(newTodo);

    res.status(201).json({ ...result, message: 'Todo created' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create todo' });
  }
});

// Get all todos
todoRouter.get('/', async (req: Request, res: Response) => {
  try {
    const db = getDB();
    const todoCollection = db.collection('todos');

    const result = await todoCollection.find().toArray();

    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get todo by id
todoRouter.get('/:id', async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const db = getDB();
    const todoCollection = db.collection('todos');

    const filter = { _id: new ObjectId(id) };

    const result = await todoCollection.findOne(filter);

    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Delete todo by id
todoRouter.delete('/delete/:id', async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const db = getDB();
    const todoCollection = db.collection('todos');

    const filter = { _id: new ObjectId(id) };

    const result = await todoCollection.deleteOne(filter);

    res.status(201).json({ ...result, message: 'Successfully deleted todo' });
  } catch (error) {
    res.status(500).json(error);
  }
});

// Update todo
todoRouter.patch('/update/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  const { title, description, priority, isComplete } = req.body;

  try {
    const db = getDB();
    const todoCollection = db.collection('todos');

    const filter = { _id: new ObjectId(id) };

    const updateDoc = {
      $set: {
        title,
        description,
        priority,
        isComplete,
      },
    };

    const result = await todoCollection.updateOne(filter, updateDoc);

    res.status(201).json({ ...result, message: 'Successfully updated todo' });
  } catch (error) {
    res.status(500).json(error);
  }
});
