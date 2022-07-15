'use strict';

const express = require('express');
const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');

const hello = require('./handler/hello.js');
const data  = require('.handler/data.js');

const error = require('./error-handlers/404.js');
const serverError = require('./error-handlers/500.js');

const hello = (req, res) => {
  res.status(200).send('Hello, World');
};

const data = (req, res) => {
  res.status(200).send({
    name: 'Tony',
    role: 'Student',
  });
};

const person = (req, res ) => {
    res.status(200).send({name: req.params.name});
};

const app = express();

app.get('/', hello);
app.get('/data', data);

app.use(logger);
app.use(validator);
app.use(error);
app.use(serverError);

function start(port) {
  app.listen(port, () => console.log(`Server listening on port ${port}`));
}

module.exports = {
  app,
  start,
};

