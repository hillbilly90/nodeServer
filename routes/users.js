var express = require('express');
var router = express.Router();
var request = require('superagent');


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

router.get('/commits', function (req, res) {
  'user strict'
  res.render('commits', {title: 'Awesome things from '});
});

/* POST users info. */
router.post('/post', function (req, res, next) {
  //res.render('post', {userName: req.body.userName, email: req.body.email});
  res.send({userName: req.body.userName, email: req.body.email});
});

router.get('/commitData', function(req, res) {
  request.get("https://api.github.com/repos/UVU-DigitalMedia/DGM-Competency-Browser/commits?author=hillbilly90")
    .end(function(err, response) {
      res.json(response);
    })
})


module.exports = router;
