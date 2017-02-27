const express = require('express');
const bodyParser = require('body-parser');
const index = require('./routes/index');
const path = require('path');
require('dotenv').config();
const swagger = require('./swagger/index');
const cors = require('cors');
const app = express();
const bunyan = require('bunyan');
const uuid = require('uuid');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(express.static(path.join(__dirname, 'public')));

const logger = bunyan.createLogger({
  name: 'starter-api',
});

app.use(function(req, res, next) {
  req.logger = logger.child({
    transactionId: req.get('transactionId') | uuid.v4(),
    method: req.method,
    url: req.url,
  });
  req.time = new Date();
  next();
});

app.use(cors());
app.use('/v1', index);
app.use(swagger());

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message,
  });
  req.logger.error(err);
});

module.exports = app;
