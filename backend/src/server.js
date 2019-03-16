// PACKAGE IMPORTS
//import passport
const passport = require('passport');
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
//importing handlebars
var exphbs  = require('express-handlebars');
//importing Google strategy
const GoogleStrategy = require('passport-google-oauth20').Strategy;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

const options = {
  clientID: 612305201026-6cs424v2i7ckl63rtme9raa4t3ul3rm3.apps.googleusercontent.com, //GOOGLE_CLIENT_ID,
  clientSecret: hzCLmuVkaY5nFYRMTPMTsmft, //GOOGLE_CLIENT_SECRET, add to .env
  callbackURL: "http://localhost:8080"
};

passport.use(new GoogleStrategy(options, function(accessToken, refreshToken, profile, cb) {
  User.findOrCreate({ googleId: profile.id }, function (err, user) {
    return cb(err, user);
  });
}
));



// FILE IMPORTS
// importing custom http routes
const routes = require('./routes');
var db = require("./models");

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

//initialize passport
app.use(passport.initialize());

//authenticate passport requests
app.get('/login',
  passport.authenticate('google', { scope: ['profile'] }));

//Handle success or failed authentication
app.get('/login', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

// define our express application with our api routes
app.use('/api', routes);

// start the server
app.listen(8081, () => {
  console.log('listening on port 8081');
});
