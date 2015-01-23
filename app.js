var express = require('express');
var morgan = require('morgan');
var swig = require('swig');

// Initiate instance of Express
var app = express();

// Start up Morgan Middleware
app.use(morgan('dev'));

// Set default rendering setting to html
app.set('view engine', 'html');
// Use Swig Template Rendering Machine to render html
app.engine('html', swig.renderFile);
// Set views path to our views folder >> what does this do exactly?
app.set('views', '/views');
// Turn off cashing in Swig = constant refresh
swig.setDefaults({ cache: false });

// Handlers
app.get("/", function(req, res) {
	console.log(app.get('views'));
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
