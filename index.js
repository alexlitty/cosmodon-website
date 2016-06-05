// Load and validate configuration file.
var config = require('./config.json');

if (!config.port) {
    throw new Error('No port specified in config.json');
}

// Initialize express.
var express = require('express');
var app = express();

// Setup express routing.
app.use('/', express.static(__dirname + '/static'));
app.get('/', function(req, res) {
    res.render('static/index.html');
});

// Start express.
app.listen(config.port, function() {
    console.log('cosmodon.com is listening on port ' + config.port);
});
