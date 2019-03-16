// PACKAGE IMPORTS
// base express app imports
const express = require('express');

// authentication to be handled on front end only

// DATABASE IMPORTS
// importing database models
var db = require("../models");

//////////////////////////////////////

// EXPRESS ROUTER
// set our express app to use express router
const router = express.Router();

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
      username : req.params.username
    }
  }).update(req.body).then(async results => {
    await res.json(results);
  })
  res.status(200).send();
})

// put request to edit a user
router.delete('/u/:username', async (req, res) => {
  db.User.findAll({
    where: {
      username: req.params.username
    }
  }).destroy(req.body).then(async results => {
    await res.json(results);
  })
  res.status(200).send();
  db.Event.destroy({
    where: {id : 'id'}
  }).then(async results => {
    await res.json(results);
  })
})

//////////////////////////////////////
// EVENT ROUTES
//////////////////////////////////////

// get request to get events for a user
router.get('/e/:id', async (req, res) => {
  db.Event.findAll({
    where: {
      user: req.params.id
    }
  }).then(async result => {
    // will return an array with one user in it
    await res.json(results[0]);
  });
  res.status(200).send();
});

// post request to create a new event
router.post('/e', async (req, res) => {
  // post request
  db.Event.create(req.body).then(async results => {
    await res.json(results);
  })
  res.status(200).send();
});

// put request to update an event
router.put('/e/:id', async (req, res) => {

  // put request
  db.Event.findAll({
    where: {id : 'id'}
  }).update(req.body).then(async results => {
    await res.json(results);
  })

  res.status(200).send();
});

// delete request to delete an event
router.delete('/e/:id', async (req, res) => {

  // delete request
  db.Event.destroy({
    where: {id : 'id'}
  }).then(async results => {
    await res.json(results);
  })

  res.status(200).send();
});

//////////////////////////////////////
// CATCH-ALL ROUTE
//////////////////////////////////////
router.get('*', async (req, res) => {
  res.status(404).send();
});

module.exports = router;
