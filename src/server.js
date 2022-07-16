'use strict';

// IMPORTS

const express = require('express');
const { logger } = require('./middleware/logger.js');
const { validator } = require('./middleware/validator.js');

const { error } = require('./error-handlers/404.js');
const { serverError } = require('./error-handlers/500.js');

const app = express();

app.use(express.json());
// app.use(logger);

// HANDLERS

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
    if(req.query.name){
        res.status(200).send({name: req.params.name});
    }
    res.status(500).send('please enter a name');
};


app.get('/',  hello);
// app.get('/', (req, res) => {
//     res.status(200).send('Hello, World');
// });

app.get('/data', data);
// app.get('/', (req, res) =>{
//     res.status(200).send({
//         name: 'Tony',
//         role: 'Student',
//     });
// });

// app.get('/person', validator, person);

// app.use(logger);
// app.use(validator);
// app.use('*', error);
// app.use(serverError);


// FUNCTIONALITY TO GET START SERVER

function start(port) {
  app.listen(port, () => console.log(`Server listening on port ${port}`));
}

module.exports = {
  app,
  start,
};

