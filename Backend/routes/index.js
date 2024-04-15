var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Hello Kaviyalzini..This is your first application');
});

module.exports = router;
