'use strict';

const logger = (req, res, next) => {
  console.log(req.method, req.url);
  console.log('logger middleware');
  next();
};

module.exports = {
  logger,
};
