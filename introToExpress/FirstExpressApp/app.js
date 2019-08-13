var express = require('express');
var app = express();



// ROUTES
// '/' route => 'Hi there!'
// .get takes two parameters (location, callback function(request being made, results being sent back))
app.get('/', function(req, res){
    res.send('Hi there!');
})
// '/bye' => 'Goodbye'
app.get('/bye', function(req, res){
    res.send('Goodbye!');
})
// '/dog' => 'MEOW!'
app.get('/dog', function(req, res){
    console.log('SOMEONE MADE A REQUEST TO /dog');
    
    res.send('MEOW!');
})

// Tell Express to listen for requests (start server)
app.listen(3000, function(){
    console.log('Server listening on port 3000');
})