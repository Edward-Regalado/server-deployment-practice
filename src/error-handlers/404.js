 'use strict';

 const error404 = (req, res, next) => {
    res.status(404).send('Sorry, cannot find that!');

    const errorObject = {
        status: 404,
        message: 'error',
    }

    res.status(404).json(errorObject);
 };

 module.exports = {
    error404,
 };

