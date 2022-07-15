'use strict';

const serverError = (req, res) => {
    res.status(500).send('Server Error!');
};

module.exports = {
    serverError,
};
