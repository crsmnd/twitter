module.exports = function(app, io) {

  // var express = require('express');
  var tweetBank = require('../tweetBank');
  // var router = express.Router();


  // var bodyParser = require('body-parser');
  // router.use(bodyParser.json());

  app.get('/', function (req, res) {
    console.log('hi');
    var User = require('../models/').User;
    User.find(1).complete(function(err, user) {
        console.log('user obj:', user);
        user.getTweets().complete(function(err, tweets) {
            console.log('tweet console log', tweets[0].tweet);
      })
    });


    var tweets = tweetBank.list();
    res.render( 'index', { title: 'Twitter.js', tweets: tweets, showForm: true } );
  });

  app.get('/users/:name', function(req, res) {
    var name = req.params.name;
    var list = tweetBank.find( {name: name} );
    res.render( 'index', {
    	title: 'Twitter.js - Posts by ' + name,
    	tweets: list,
    	showForm: true,
    	user_page: name
    } );
  });


  app.post('/submit', function(req, res) {
  	console.log(req.body);
  	var name = req.body.name;
  	var text = req.body.text;
  	tweetBank.add(name, text);
  	io.sockets.emit('new_tweet', { name: name, text: text });
  	res.redirect('/');
  })




}
// module.exports = router;