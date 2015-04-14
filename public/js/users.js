var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var Kyle = {
    name: 'Kyle',
    job: 'The Bomb'
  };

  res.send(Kyle);
});

router.get('/post', function (req, res, next) {
  res.send('Thanks for asking for data, none provided');
});

/* POST users info. */
router.post('/post', function (req, res, next) {
  //res.render('post', {userName: req.body.userName, email: req.body.email});
  res.send({userName: req.body.userName, email: req.body.email});
});

module.exports = router;
