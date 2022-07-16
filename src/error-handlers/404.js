 'use strict';

 const error = (req, res, next) => {
    res.status(404).send('Not Found');

    const errorObject = {
        status: 404,
        message: 'error',
    }

    res.status(404).json(errorObject);
 };

 module.exports = {
    error,
 };

//  const error = (req, res) => {
//     res.status(404).send('Not Found');

//  }

//  module.exports = {
//     error,
//  };
