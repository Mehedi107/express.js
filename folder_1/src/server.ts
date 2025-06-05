import app from './app';
import { connectDB } from './config/mongodb';

const port = 5000;

let server;

const startServer = async () => {
  try {
    await connectDB();

    server = app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
  }
};

startServer();
