var express = require('express');
var app = express();

// route path
app.get('/', function(req, res) {
    res.send('this will be the landing page')
})

// Tell Express to listen for requests (start server)
app.listen(3000, function(){
    console.log('Yelp Camp server has started on port 3000');
})