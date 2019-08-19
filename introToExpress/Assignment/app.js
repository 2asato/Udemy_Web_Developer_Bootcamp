var express = require('express');
var app = express();

// ROUTES

// Visiting '/' should print "Hi there, welcome to my assignment!'
app.get('/', function(req, res){
    res.send("Hi there, welcome to my assignment!")
})

// Visiting '/speak/pig' should print 'The pig says 'Oink''
// Visiting '/speak/cow' should print 'The cow says 'Moo''
// Visiting '/speak/dog' should print 'The dog says 'Woof Woof!''




// Tell Express to listen for requests (start server)
app.listen(3000, function(){
    console.log('Server listening on port 3000');
})