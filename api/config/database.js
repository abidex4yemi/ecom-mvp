const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { mongoURI } = require('./keys');

dotenv.config();

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(mongoURI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
    return connection;
  } catch (error) {
    return error;
  }
};

module.exports = connectDB;
