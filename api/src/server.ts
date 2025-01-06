import { port } from './config/environment';
import app from './app';
import { connectToDatabase, disconnectFromDatabase } from './config/database';

const startServer = () => {
  try {
    console.log('Starting server...');
    return app.listen(port, async () => {
      console.log(`Server running at http://locaalhost:${port}`);
      await connectToDatabase();
    });
  } catch (error) {
    console.error('Error starting server: ', error);
    process.exit(1);
  }
};

const server = startServer();

process.on('SIGINT', async () => {
  console.log('Received SIGINT. Shutting down server...');
  server.close(async () => {
    await disconnectFromDatabase();
    console.log('Server shut down is complete! Exiting...');
    process.exit(0);
  });
});
