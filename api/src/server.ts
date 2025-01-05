import { port } from './config/environment';
import app from './app';
import { connectDB } from './config/database';

const startServer = async (): Promise<void> => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server running at http://locaalhost:${port}`);
    });
  } catch (error) {
    console.error('Failed to start the server: ', error);
    process.exit(1);
  }
};

startServer();
