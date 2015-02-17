var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var Kyle = {
    name: 'Kyle',
    job: 'The Bomb'
  }

  res.send(Kyle);
});

module.exports = router;
