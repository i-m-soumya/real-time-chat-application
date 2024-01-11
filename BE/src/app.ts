import express from 'express';
import routes from '../routes';
import { connectDB } from '../db/connect';
import dotenv from 'dotenv';


dotenv.config();


const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(routes);

app.listen(port, async () => {
  await connectDB("mongodb://0.0.0.0:27017/real-time-messaging");
  return console.log(`Express is listening at http://localhost:${port}`);
});