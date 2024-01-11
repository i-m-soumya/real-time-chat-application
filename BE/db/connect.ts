import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const dbUrl = process.env.MONGO_DB_URL
    await mongoose.connect(dbUrl);
    return console.log('MongoDB connected');
  } catch (err) {
    return console.log(err);
  }
};
