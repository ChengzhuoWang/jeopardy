const express = require('express')
const path = require('path')
const firebaseREST = require('./firebaseREST.js')
var cors = require('cors');
var app = express();


 app.use(function(req,res,next) {
     var allowedOrigins = ['127.0.0.1:8080', 'localhost:4000'];
     var origin = req.headers.origin;
     if(allowedOrigins.indexOf(origin) > -1){
          res.setHeader('Access-Control-Allow-Origin', origin);
     }
     res.header('Access-Control-Allow-Origin', "*");
     res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS');
     res.header('Access-Control-Allow-Headers', 'Content-Type');
     return next();
 });
//process.env.PORT = 4000;
//process.env.IP = '127.0.0.1';


app.set('port', (process.env.PORT || 5000));

app.use('/api/', firebaseREST);


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

