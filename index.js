const express = require('express')
const path = require('path')
const firebaseREST = require('./firebaseREST.js')

var app = express();

process.env.PORT = 4000;
process.env.IP = '127.0.01';

app.set('port', (process.env.PORT || 5000));

app.use('/api/', firebaseREST)

app.use(express.static(__dirname + '/app'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/jeopardy-api', function(req, res) {
    res.sendFile(path.join(__dirname, '/app/api.html'));
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

