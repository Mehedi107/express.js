import app from './app';
import { MongoClient, ServerApiVersion } from 'mongodb';

const port = 5000;

let server;

const uri =
  'mongodb+srv://demoTodo:baVuzued1HIK31dj@cluster0.blfnk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const startServer = async () => {
  await client.connect();
  const db = client.db('demoTodoDB');
  const collection = db
    .collection('todos')
    .insertOne({ test: 'This is for testing' });

  console.log('>>>> Connected to MongoDB! <<<<');

  server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

startServer();
