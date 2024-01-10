import express from 'express';
import routes from '../routes';
import { connectDB } from '../db/connect';

const app = express();
const port = 3000;

app.use(express.json());
app.use(routes);

app.listen(port, async () => {
  await connectDB("mongodb://0.0.0.0:27017/real-time-messaging");
  return console.log(`Express is listening at http://localhost:${port}`);
});