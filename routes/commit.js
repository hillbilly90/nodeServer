var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('commit', { commit: 'Here is a list of the commit data'});
});

module.exports = router;
