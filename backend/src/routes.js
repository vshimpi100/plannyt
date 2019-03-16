// PACKAGE IMPORTS
// base express app imports
const express = require('express');


// AUTHENTICATION IMPORTS
// will be using auth0 for user authentication
const auth0 = require('auth0');
// jwt and jwksRsa for auth0 tokenization
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

// DATABASE IMPORTS
// importing database models
var db = require("./models");

//////////////////////////////////////

// EXPRESS ROUTER
// set our express app to use express router
const router = express.Router();

//////////////////////////////////////

// API ROUTES

// get request to get latest events
router.get('/api/e/:id', async (req, res) => {
  db.Event.findAll({}).then(async result => {
    await res.json(results);
  });
});

// this is a middleware to validate access_tokens
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://bk-tmp.auth0.com/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  audience: 'https://micro-blog-app',
  issuer: `https://bk-tmp.auth0.com/`,
  algorithms: ['RS256']
});

// post request to create a new event
router.post('/api/e', checkJwt, async (req, res) => {

  // check authentication
  const token = req.headers.authorization
    .replace('bearer ', '')
    .replace('Bearer ', '');

  const authClient = new auth0.AuthenticationClient({
    domain: 'bk-tmp.auth0.com',
    clientId: 'ZComiPhZoVB02xOsBF81LVbpsvkjL93S',
  });

  authClient.getProfile(token, async (err, userInfo) => {
    if (err) {
      return res.status(500).send(err);
    }

    // post request
    db.Event.create(req.body).then(async results =>{
      await res.json(results);
    })

    res.status(200).send();
  });
});

// put request to update an event
router.put('/api/e/:id', checkJwt, async (req, res) => {

  // check authentication
  const token = req.headers.authorization
    .replace('bearer ', '')
    .replace('Bearer ', '');

  const authClient = new auth0.AuthenticationClient({
    domain: 'bk-tmp.auth0.com',
    clientId: 'ZComiPhZoVB02xOsBF81LVbpsvkjL93S',
  });

  authClient.getProfile(token, async (err, userInfo) => {
    if (err) {
      return res.status(500).send(err);
    }

    // add something to check if person making update is the owner of the event

    // post request
    db.Event.findAll({where: 'id'=id}).update(req.body).then(async results =>{
      await res.json(results);
    })

    res.status(200).send();
  });
});

// delete request to delete an event
router.put('/api/e/:id', checkJwt, async (req, res) => {

  // check authentication
  const token = req.headers.authorization
    .replace('bearer ', '')
    .replace('Bearer ', '');

  const authClient = new auth0.AuthenticationClient({
    domain: 'bk-tmp.auth0.com',
    clientId: 'ZComiPhZoVB02xOsBF81LVbpsvkjL93S',
  });

  authClient.getProfile(token, async (err, userInfo) => {
    if (err) {
      return res.status(500).send(err);
    }

    // add something to check if person making delete request is the owner of the event

    // post request
    db.Event.destroy({where: 'id'=id}).then(async results =>{
      await res.json(results);
    })

    res.status(200).send();
  });
});













async function loadEvents() {
  const client = await MongoClient.connect('mongodb://localhost:27017/');
  return client.db('micro-blog').collection('micro-posts');
}

module.exports = router;
