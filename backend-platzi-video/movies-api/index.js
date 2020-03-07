const express = require('express');
const app = express();

const { config } = require('./config/index');

const authApi = require('./routes/auth.js');
const moviesApi = require('./routes/movies.js');
const userMoviesApi = require('./routes/userMovies.js');

const { logErrors, wrapErrors, errorHandler } = require('./utils/middleware/errorHandlers.js');

const notFoundHandler = require('./utils/middleware/notFoundHandler.js');

// body parser
app.use(express.json());

// routes
authApi(app);
moviesApi(app);
userMoviesApi(app);

// catch 404
app.use(notFoundHandler);

// Error middleware
app.use(logErrors);
app.use(wrapErrors)
app.use(errorHandler);

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});