var express = require('express');
var app = express();
var request = require('request');

// search route
app.get('/results', function(req, res){
    res.send('hello it works')
})

// results route

// Tell Express to listen for requests (start server)
app.listen(3000, function(){
    console.log('Server listening on port 3000');
})