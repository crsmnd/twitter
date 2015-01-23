var express = require('express');
var tweetBank = require('../tweetBank');
var router = express.Router();


// var bodyParser = require('body-parser');
// router.use(bodyParser.json());

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: tweets, showForm: true } );
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  res.render( 'index', {
  	title: 'Twitter.js - Posts by ' + name,
  	tweets: list,
  	showForm: true,
  	user_page: name
  } );
});


router.post('/submit', function(req, res) {
	console.log(req.body);
	var name = req.body.name;
	var text = req.body.text;
	tweetBank.add(name, text);
	res.redirect('/');
})





module.exports = router;