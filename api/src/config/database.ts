import mongoose from 'mongoose';
import { dbUri } from './environment';

export const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(dbUri);
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Error connecting to database: ', error);
    process.exit(1);
  }
};
