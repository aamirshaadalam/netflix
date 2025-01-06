import mongoose from 'mongoose';
import { dbUri } from './environment';

export const connectToDatabase = async (): Promise<void> => {
  try {
    console.log('Connecting to database...')
    await mongoose.connect(dbUri);
    console.log('Database connected!');
  } catch (error) {
    console.error('Error connecting to database: ', error);
    process.exit(1);
  }
};

export const disconnectFromDatabase = async () => {
  try {
    console.log('Disconnecting from database...')
    await mongoose.disconnect();
    console.log('Database disconnected!');
  } catch (error) {
    console.error('Error disconnecting from database:', error);
  }
};
