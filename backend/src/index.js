// PACKAGE IMPORTS
//import express
const express = require('express');
// importing body parser
const bodyParser = require('body-parser');
// import CORS which will allow handling of cross-origin requests
const cors = require('cors');
// helmet for enhanced application security
const helmet = require('helmet');
// morgan will log all HTTP requests
const morgan = require('morgan');

// FILE IMPORTS
// importing custom http routes
const routes = require('./routes');

// define the Express app
const app = express();

// enhance app security with Helmet
app.use(helmet());

// use bodyParser to parse application/json content-type
app.use(bodyParser.json());

// enable all CORS requests
app.use(cors());

// log HTTP requests
app.use(morgan('combined'));

// define our express application with our api routes
app.use('/api', routes);

// start the server
app.listen(8081, () => {
  console.log('listening on port 8081');
});
