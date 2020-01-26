const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { mongoURI } = require('./keys');

dotenv.config();

const connection = mongoose.createConnection(mongoURI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  dbName: 'ecom'
});

module.exports = connection;
