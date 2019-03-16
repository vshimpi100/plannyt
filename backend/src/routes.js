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
// MIDDLEWARE
//////////////////////////////////////

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

//////////////////////////////////////
// USER ROUTES
//////////////////////////////////////

// get request to get events for a given user
router.get('/u/:username', async (req, res) => {
  db.User.findAll({
    where: {
      user: req.params.username
    }
  }).then(async result => {
    // will return an array with one user in it
    await res.json(results[0]);
  });
});

// post request to create a new user
router.post('/u', async (req, res) => {
  db.User.create(req.body).then(async results => {
    await res.json(results);
  })
  res.status(200).send();
})

// put request to edit a user
router.put('/u/:username', async (req, res) => {
  db.User.findAll({
    where: {
      username = req.params.username
    }
  }).update(req.body).then(async results => {
    await res.json(results);
  })
  res.status(200).send();
})

// put request to edit a user
router.delete('/u/username', async (req, res) => {
  db.User.findAll({
    where: {
      username: req.params.username
    }
  }).destroy(req.body).then(async results => {
    await res.json(results);
  })
  res.status(200).send();
  db.Event.destroy({
    where: 'id' = id
  }).then(async results => {
    await res.json(results);
  })
})

//////////////////////////////////////
// EVENT ROUTES
//////////////////////////////////////

// get request to get events for a user
router.get('/e/:username', checkJwt, async (req, res) => {

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

    db.Event.findAll({
      where: {
        user: req.params.username
      }
    }).then(async result => {
      // will return an array with one user in it
      await res.json(results[0]);
    });
  });

  res.status(200).send();
});

// post request to create a new event
router.post('/e', checkJwt, async (req, res) => {

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
    db.Event.create(req.body).then(async results => {
      await res.json(results);
    })

    res.status(200).send();
  });
});

// put request to update an event
router.put('/e/:id', checkJwt, async (req, res) => {

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

    // put request
    db.Event.findAll({
      where: 'id' = id
    }).update(req.body).then(async results => {
      await res.json(results);
    })

    res.status(200).send();
  });
});

// delete request to delete an event
router.delete('/e/:id', checkJwt, async (req, res) => {

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
    db.Event.destroy({
      where: 'id' = id
    }).then(async results => {
      await res.json(results);
    })

    res.status(200).send();
  });
});

module.exports = router;
