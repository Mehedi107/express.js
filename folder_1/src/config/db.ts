import 'dotenv/config';
import { MongoClient, ServerApiVersion } from 'mongodb';

const uri =
  'mongodb+srv://demoTodo:baVuzued1HIK31dj@cluster0.blfnk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const connectDB = async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db('demoTodoDB').command({ ping: 1 });

    console.log('You successfully connected to MongoDB!');
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
  run().catch(console.dir);
};
