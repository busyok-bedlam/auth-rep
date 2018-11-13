const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

// custom middlewares
const corsHandler = require('../common/middlewares/cors-handler');
const notFoundHandler = require('../common/middlewares/not-found-handler');
const errorHandler = require('../common/middlewares/error-handler');

// modules
const authenticateRouter = require('./client_api/authenticate/router');

const app = express();


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(corsHandler);


app.use('/client-api/authenticate', authenticateRouter);

app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
