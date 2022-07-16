'use strict';

const serverError = (err, req, res, next) => {

    const error = err.message ? err.message : err;

    const errorObject = {
        status: 500,
        message: 'error',
    }

    res.status(500).json(errorObject);
};

module.exports = {
    serverError,
};
// const serverError = (req, res) => {
//     res.status(500).send('Server Error!');
// };

// module.exports = {
//     serverError,
// };
