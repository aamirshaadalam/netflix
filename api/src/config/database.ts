import mongoose from 'mongoose';
import environment from './environment';

export const connectDB = async (): Promise<void> => {
  try {
    const { dbUri } = environment;
    await mongoose.connect(dbUri);
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Error connecting to database: ', error);
    process.exit(1);
  }
};
