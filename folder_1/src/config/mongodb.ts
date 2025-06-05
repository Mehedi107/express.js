import 'dotenv/config';
import { Db, MongoClient, ServerApiVersion } from 'mongodb';

const uri =
  'mongodb+srv://demoTodo:baVuzued1HIK31dj@cluster0.blfnk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let db: Db;

export const connectDB = async () => {
  await client.connect();
  db = client.db('demoTodoDB');
  console.log('✅ Connected to MongoDB');
};

export const getDB = (): Db => {
  if (!db) throw new Error('❌ DB not connected');
  return db;
};
