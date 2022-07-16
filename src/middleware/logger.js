'use strict';

// all middleware has access to the request
// logs the request method and request path
const logger = (req, res, next) => {
    console.log('Request Method:', req.method, 'Path:', req.path);
    // call next() so the next function in line can do it's job
    next();
};

module.exports = {
    logger,
};
