const cookieParser = require('cookie-parser');
const express = require('express');
const helmet = require('helmet');
const reload = require('reload');
const path = require('path');
const cors = require('cors');
const { addLocals } = require('./controllers');
const { notFound, developmentErrors, productionErrors } = require('./lib/errors');

const indexRoutes = require('./routes');

const app = express();

/**
 * Set view engine
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

/**
 * Static assets
 */
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Security & Parsers
 */
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/**
 * Add data to the template engine
 */
app.use(addLocals);

/**
 * Routes
 */
app.use('/', indexRoutes);

/**
 * In dev, we live reload
 */
app.get('env') === 'development' && reload(app);

/**
 * Catch 404 for routes not found
 * and any other errors
 */
app.use(notFound);
app.get('env') === 'development' ? app.use(developmentErrors) : app.use(productionErrors);

module.exports = app;
