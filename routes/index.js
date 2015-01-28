module.exports = function(app, io) {
  var Sequelize_Objs = require('../models/');
  var User = Sequelize_Objs.User;
  var Tweet = Sequelize_Objs.Tweet;


  var tweetBank = require('../tweetBank');
  // var express = require('express');
  // var router = express.Router();

  app.get('/', function (req, res) {
    Tweet.findAll({include: [User], order: 'id DESC'}).then(function(tweets) {
      res.render( 'index', { title: 'Twitter.js', tweets: tweets, showForm: true } );
    });
  });

  app.get('/users/:name', function(req, res) {
    var name = req.params.name;
    User.find({where: {name: name}}).then(function(user) {
      user.getTweets({include: [User]}).then(function(tweets) {
        res.render( 'index', {
        	title: 'Twitter.js - Posts by ' + name,
        	tweets: tweets,
        	showForm: true,
        	user_page: name
        } );
      });
    });
  });


  app.post('/submit', function(req, res) {
  	var name = req.body.name;
  	var text = req.body.text;

    User.findOrCreate({where: {name: name}}).then(function(user) {
      Tweet.create({UserId: user[0].id, tweet: text}).then(function(tweet) {
        io.sockets.emit('new_tweet', { name: name, text: text, id: user[0].id });
        res.redirect('/');
      });
    });
  });




}
// module.exports = router;