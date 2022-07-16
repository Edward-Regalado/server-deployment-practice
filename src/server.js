'use strict';

// IMPORTS

const express = require('express');

const { hello } = require('./handlers/hello.js');
const { data } = require('./handlers/data.js');
const { person } = require('./handlers/person.js');

const { logger }  = require('./middleware/logger.js');
const { validator } = require('./middleware/validator.js');

const { error404 } = require('./error-handlers/404.js');
const { serverError } = require('./error-handlers/500.js');


const app = express();

app.use(express.json());

// all routes get the logger middleware
app.use(logger);

// ROUTES

app.get('/', hello);
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

app.put('/person', validator, person);


app.use('*', error404);
app.use(serverError);


// FUNCTIONALITY TO GET START SERVER

function start(port) {
  app.listen(port, () => console.log(`Server listening on port ${port}`));
}

module.exports = {
  app,
  start,
};

