 'use strict';

 const error = (req, res) => {
    res.status(404).send('Not Found');
 }

 module.exports = {
    error,
 };
