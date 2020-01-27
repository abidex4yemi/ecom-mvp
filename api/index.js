/**
 * Application Main file
 */
const express = require('express');
const logger = require('morgan');
const dotenv = require('dotenv');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const connection = require('./models');
const { NOT_FOUND } = require('./util/error');
const customErrorHandler = require('./middleware/customErrorHandler');
const { handleSuccessResponse, OK } = require('./util/success');
const { cookieKey } = require('./config/keys');
const productRouter = require('./routes/productRouter');
const categoryRouter = require('./routes/categoryRouter');

const app = express();

dotenv.config();

/**
 * Set up middleware
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(logger('dev'));
app.use(helmet());

const sessionStore = new MongoStore({
  mongooseConnection: connection,
  collection: 'sessions'
});

app.use(
  session({
    secret: cookieKey,
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 // Expires in 24hours
    }
  })
);

app.get('/', (req, res) =>
  res.status(OK).json(
    handleSuccessResponse({
      message: 'Welcome to API root...',
      data: []
    })
  )
);

app.use('/api/v1', [productRouter, categoryRouter]);

// Handle invalid request
app.all('*', (req, res) =>
  res.status(NOT_FOUND).json({
    success: false,
    message: 'Route does not exist...',
    body: []
  })
);

// handle all application error
// eslint-disable-next-line max-len
app.use(customErrorHandler());

module.exports = app;
