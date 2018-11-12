const createError = require('http-errors');
const getLogger = require('./logger');
const logger = getLogger('errors');

/**
 * Catch async exceptions and pass to next(err)
 */
exports.wrapAsync = fn => (req, res, next) => fn(req, res, next).catch(next);

/**
 * Not found Error handler
 * Omit the err param since this is not yet an error handler
 */
exports.notFound = (req, res, next) => {
  next(createError(404));
};

/**
 * Development Error handler
 */
exports.developmentErrors = (err, req, res, next) => {
  const { stack = '', response = {}, status, message } = err;
  const { status: resStatus, data } = response;
  const errStatus = resStatus || status || 500;
  const errorDetails = {
    status: errStatus,
    message,
    ...(data && { data }),
    stackHighlighted: stack.replace(/[a-z_-\d]+.js:\d+:\d+/gi, '<mark>$&</mark>'),
  };
  res.status(errStatus);
  res.format({
    'text/html': () => res.render('error', errorDetails),
    'application/json': () => res.json(errorDetails)
  });
};

/**
 * Production Error handler
 */
exports.productionErrors = (err, req, res, next) => {
  const { response = {}, status, message } = err;
  const { status: resStatus, data } = response;
  const errStatus = resStatus || status || 500;
  const errorDetails = {
    status: errStatus,
    message,
    ...(data && { data }),
  };
  res.status(errStatus);
  res.render('error', errorDetails);
};
