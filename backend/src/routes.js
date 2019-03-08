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

// get request to get latest events
router.get('/', async (req, res) => {
  const collection = await loadEvents();
  res.send(
    await collection.findAll({}).toArray()
  );
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
router.post('/', checkJwt, async (req, res) => {
  const collection = await loadEvents();

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

    await collection.insertOne({
      text: req.body.text,
      createdAt: new Date(),
      author: {
        sub: userInfo.sub,
        name: userInfo.name,
        picture: userInfo.picture,
      },
    });

    res.status(200).send();
  });
});

async function loadEvents() {
  const client = await MongoClient.connect('mongodb://localhost:27017/');
  return client.db('micro-blog').collection('micro-posts');
}

module.exports = router;
