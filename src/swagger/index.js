const express = require('express');
const router = new express.Router();
const fs = require('fs');

module.exports = function() {
  /* GET swagger documentation. */
  return router.get('/swagger.json', function(req, res, next) {
    req.logger.info('requesting swagger');
    const file = fs.readFileSync(__dirname + '/swagger.json', 'utf-8');
    res.status(200);
    res.json(JSON.parse(file));
    req.logger.info({
        message: 'ending request swagger',
        totalTime: new Date() - req.time,
    });
  });
};
