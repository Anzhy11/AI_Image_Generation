import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

import connectDB from './database/connect.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.get('/', (req, res) => {
  res.send('AI Image Generation Backend')
})

const PORT = process.env.PORT || 5000

const server = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log(`Server is running at port ${PORT}`)
    });
  } catch (error) {
    console.log(error);
  }
}

server();