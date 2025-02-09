import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('MongoDB connected');
    } catch(error){
        console.error('Database connection error: ', error);
        process.exit(1);
    }
};

export const disconnectDB = async () => {
    try {
      await mongoose.disconnect();
      console.log('MongoDB disconnected');
    } catch (error) {
      console.error('Disconnection error:', error);
      process.exit(1);
    }
  };