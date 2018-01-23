const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const router = require('./router');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());

app.use(bodyParser.json({
  limit: '50mb'
}));

app.use(bodyParser.urlencoded({
  parameterLimit: 100000,
  limit: '50mb',
  extended: true
}));

app.set('SECRET_KEY', new Buffer(process.env.SECRET_KEY || 'zeplin.api').toString('base64'));

app.use('/api', router);

module.exports = app;
