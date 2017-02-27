const express = require('express');
const router = new express.Router();
const ctrlHello = require('../controllers/hello');

/* GET home page. */
router.get('/hello', ctrlHello.getHello);

module.exports = router;
