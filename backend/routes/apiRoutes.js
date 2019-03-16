var db = require('../models');

module.exports = function (app) {

  // get request to get events for a given user
  app.get('/u/:username', async (req, res) => {
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
  app.post('/u', async (req, res) => {
    db.User.create(req.body).then(async results => {
      await res.json(results);
    })
    res.status(200).send();
  })

  // put request to edit a user
  app.put('/u/:username', async (req, res) => {
    db.User.findAll({
      where: {
        username: req.params.username
      }
    }).update(req.body).then(async results => {
      await res.json(results);
    })
    res.status(200).send();
  })

  // put request to edit a user
  app.delete('/u/username', async (req, res) => {
    db.User.findAll({
      where: {
        username: req.params.username
      }
    }).destroy(req.body).then(async results => {
      await res.json(results);
    })
    res.status(200).send();
    db.Event.destroy({
      where: {
        id: id
      }
    }).then(async results => {
      await res.json(results);
    })
  })

  //////////////////////////////////////
  // EVENT ROUTES
  //////////////////////////////////////

  // get request to get events for a user
  app.get('/e/:id', async (req, res) => {
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
  app.post('/e', async (req, res) => {
    // post request
    db.Event.create(req.body).then(async results => {
      await res.json(results);
    })
    res.status(200).send();
  });

  // put request to update an event
  app.put('/e/:id', async (req, res) => {

    // put request
    db.Event.findAll({
      where: {
        id: id
      }
    }).update(req.body).then(async results => {
      await res.json(results);
    })

    res.status(200).send();
  });

  // delete request to delete an event
  app.delete('/e/:id', async (req, res) => {

    // delete request
    db.Event.destroy({
      where: {
        id: id
      }
    }).then(async results => {
      await res.json(results);
    })

    res.status(200).send();
  });

  //////////////////////////////////////
  // CATCH-ALL ROUTE
  //////////////////////////////////////
  app.get('*', async (req, res) => {
    res.status(404).send();
  });
}