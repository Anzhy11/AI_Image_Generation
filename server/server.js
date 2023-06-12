const dotenv = require('dotenv').config();
const express = require('express');
const cors = require('cors');

const connectDB = require('./database/connect');
const postRoutes = require('./routes/postsRoutes');
const dalleRoutes = require('./routes/dalleRoutes');

const notFoundMiddleware = require('./middlewares/not-found');



const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

app.get('/', (req, res) => {
  res.send('AI Image Generation Backend')
})

app.use(notFoundMiddleware);

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