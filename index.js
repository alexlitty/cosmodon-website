// Load and validate configuration file.
var config = require('./config.json');

if (!config.port) {
    throw new Error('No port specified in config.json');
}

// Initialize express.
var express = require('express');
var app = express();

// Setup Swig.
var swig = require('swig');
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.set('view cache', !config.debug);
swig.setDefaults({ cache: !config.debug });

// Setup express routing.
app.use('/', express.static(__dirname + '/static'));
app.get('/', function(req, res) {
    res.render('partials/home');
});
app.get('/documentation', function(req, res) {
    res.render('partials/documentation/home');
});
app.get('/download', function(req, res) {
    res.render('partials/download');
});

// Start express.
app.listen(config.port, function() {
    console.log('cosmodon.com is listening on port ' + config.port);
});
