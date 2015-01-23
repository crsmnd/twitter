var express = require('express');
var morgan = require('morgan');

// Initiate instance of Express
var app = express();

// Start up Morgan Middleware
app.use(morgan('dev'));

// Handlers
app.get("/", function(req, res) {
	res.send("Hello World!");
});

app.get("/tweets", function(req, res) {
	res.send("Now you are in the Tweet directory!");
});


// Activate server to listen at port 1234
var port = 3000;
app.listen(port, function() {
	console.log("server listening");
});
