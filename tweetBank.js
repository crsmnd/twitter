var _ = require('underscore');

var data = [];

function add (name, text, id) {
  if (id == undefined) id = data.length;
	data.unshift({name: name, text: text, id: id});
}

function list () {
	return _.clone(data);
}

function find (properties) {
	return _.where(data, properties);
}

function num_tweets () {
  return data.length;
}

module.exports = {add: add, list: list, find:find, num_tweets:num_tweets};

var randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var getFakeName = function() {
  var fakeFirsts = ['Nimit', 'Dave', 'Will', 'Charlotte', 'Jacob','Ethan','Sophia','Emma','Madison'];
  var fakeLasts = ["Alley", 'Stacky', 'Fullstackerson', 'Nerd', 'Ashby', 'Gatsby', 'Hazelnut', 'Cookie', 'Tilde', 'Dash'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

var getFakeTweet = function() {
  var awesome_adj = ['awesome','breathtaking','amazing','sexy','sweet','cool','wonderful','mindblowing'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

for(var i=0; i<10; i++) {
  module.exports.add( getFakeName(), getFakeTweet(), i );
}

module.exports.add('Vincent Daranyi', 'Hooraay #fun');
module.exports.add('Colin VanLang', 'I love Fullstack! #work');