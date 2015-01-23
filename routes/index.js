var express = require('express');
var tweetBank = require('../tweetBank');
var router = express.Router();

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
});

router.get( '/users/:name', function (req, res) {
  console.log( req.params.name );
});

module.exports = router;