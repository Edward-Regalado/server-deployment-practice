'use strict';

const express = require('express');
const { logger } = require('./middleware/logger.js');

const { hello } = require('./handler/hello.js');
const { data } = require('.handler/data.js');

const makeError = (req, res)

const hello = (req, res) => {
  res.status(200).send('Hello, World');
};

const data = (req, res) => {
  res.status(200).send({
    name: 'Tony',
    role: 'Student',
  });
};

// person route
const person = (req, res ) => {
    res.status(200).send({name: req.params.name});
};

const app = express();

app.get('/', hello);
app.get('/data', data);
app.get('/person/:name', notFoundError);
app.get('/throw-error', serverError);

function start(port) {
  app.listen(port, () => console.log(`Server listening on port ${port}`));
}

module.exports = {
  app,
  start,
};

