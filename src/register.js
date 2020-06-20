const express = require('express');

function createRouter(db) {
  const router = express.Router();
  const owner = '';

  router.get('/registers', function (req, res, next) {
    db.query(
      'SELECT * FROM `heroku_851e4397b87123b`.`register`',
      [owner, 10*(req.params.page || 0)],
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json(results);
        }
      }
    );
  });

  // the routes are defined here

  return router;
}

module.exports = createRouter;