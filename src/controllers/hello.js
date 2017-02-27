

module.exports.getHello = function(req, res, next) {
  req.logger.info({
    message: 'requesting hello',
  });
  if (req.query.name) {
    res.status(200);
    res.json({
        message: 'Hello ' + req.query.name,
    });
  } else {
    res.status(200);
    res.json({
        message: 'Hello World',
    });
  }
  req.logger.info({
    message: 'response hello',
    totalTime: new Date() - req.time,
  });
};
