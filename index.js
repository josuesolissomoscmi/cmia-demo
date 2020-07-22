var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hello CMI');
});

app.listen(300, function() {
    console.log('Demo');
});