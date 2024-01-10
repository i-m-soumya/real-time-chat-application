import mongoose from 'mongoose';

export const connectDB = async (url: string) => {
  try {
    await mongoose.connect(url);
    return console.log('MongoDB connected');
  } catch (err) {
    return console.log(err);
  }
};
