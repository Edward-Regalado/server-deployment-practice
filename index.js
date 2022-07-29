'use strict';

require('dotenv').config();

const port = process.env.PORT ?? 3000;
// console.log(process.env);

// import our server.js file
const server = require('./src/server.js');
server.start(port);
