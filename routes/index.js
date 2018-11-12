const router = require('express').Router();
const getLogger = require('../lib/logger');
const logger = getLogger('routes/index');

logger.verbose('adding / routes...');

router.get('/', (req, res, next) => res.render('index', {
  title: 'Welcome to Express',
  message: 'Hello, World!'
}));

/**
 * Add more routes here
 */

logger.verbose('added / routes');

module.exports = router;
