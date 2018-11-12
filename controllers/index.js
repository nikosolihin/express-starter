const createError = require('http-errors');
const getLogger = require('../lib/logger');
const config = require('../config');

const logger = getLogger('controllers/index');

/**
 * Add variables to the template engine
 */
exports.addLocals = (req, res, next) => {
  res.locals.env = req.app.get('env');
  res.locals.config = config;
  next();
};

/**
 * Request body should not be empty
 */
exports.checkBody = (req, res, next) => {
  if (!Object.keys(req.body).length) {
    const err = createError(400, 'Empty request body');
    logger.error(err);
    return next(err);
  }
  next();
};