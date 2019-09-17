var express = require('express');
var app = express();
var request = require('request');

// search route
app.get('/results', function(req, res){
    request('http://omdbapi.com/?s=california&apikey=thewdb', function(error, response, body){
        if(!error && response.statusCode == 200) {
            var results = JSON.parse(body)
            res.send(results['Search'][0]['Title']);
        }
    })
})

// results route

// Tell Express to listen for requests (start server)
app.listen(3000, function(){
    console.log('Server listening on port 3000');
})