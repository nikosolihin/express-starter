const getLogger = require('./lib/logger');

const logger = getLogger('server');
const host = process.env.APP_HOST;
const port = process.env.APP_PORT;

module.exports = app => app.listen(port, () => logger.info(`Server listening at http://%s:%d`, host, port));