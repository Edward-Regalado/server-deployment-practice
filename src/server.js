'use strict';

// IMPORTS

const express = require('express');

const { hello } = require('./handlers/hello.js');
const { data } = require('./handlers/data.js');
const { person } = require('./handlers/person.js');

const { createUser, listUsers, getUser, deleteUser, updateUser } = require('./handlers/user');
const { createPet, listPets, getPet, deletePet, updatePet } = require('./handlers/pet');
const { createCar, listCars, getCar, deleteCar, updateCar } = require('./handlers/car.js');

const { logger }  = require('./middleware/logger.js');
const { validator } = require('./middleware/validator.js');

const { error404 } = require('./error-handlers/404.js');
const { serverError } = require('./error-handlers/500.js');
// const { db } = require('./db.js');


// const { userRouter } = require('./routes/users');


const app = express();

app.use(express.json());

// all routes get the logger middleware
app.use(logger);

// ROUTES

app.get('/', hello);
app.get('/data', data);
app.put('/person', validator, person);


// User Routes
app.get('/user', listUsers);
app.post('/user', createUser);
app.get('/user/:id', getUser);
app.delete('/user/:id', deleteUser);
app.put('/user/:id', updateUser);

// Pet Routes
app.post('/pet', createPet);
app.get('/pet', listPets);
app.get('/pet/:id', getPet);
app.delete('/pet/:id', deletePet);
app.put('/pet/:id', updatePet);

// Car Routes
app.post('/car', createCar);
app.get('/car', listCars);
app.get('/car/:id', getCar);
app.delete('/car/:id', deleteCar);
app.put('/car/:id', updateCar);

// app.use('/users', userRouter);


app.use('*', error404);
app.use(serverError);


// FUNCTIONALITY TO GET START SERVER

// db.sync();
function start(port) {
  app.listen(port, () => console.log(`Server listening on port ${port}`));
}

module.exports = {
  app,
  start,
};

