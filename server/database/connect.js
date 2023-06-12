const mongoose = require('mongoose');

const connectDB = (URL) => {
  mongoose.set('strictQuery', true);

  mongoose.connect(URL)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));
}

module.exports = connectDB;