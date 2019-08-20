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
app.get('/speak/:animalName', function(req, res){
    var sounds = {
        pig: "Oink",
        cow: "Mooo",
        dog: "Woof Woof!",
        cat: "Meow",
        goldfish: "..."
    }
    var animal = req.params.animalName.toLowerCase();
    var sound = sounds[animal];
    res.send("The " + animal + " says '" + sound +"'");  
})

// Visiting '/repeat/hello/3' should print 'hello hello hello'
// Visiting '/repeat/hello/5' should print 'hello hello hello hello hello'
// Visiting '/repeat/blah/2' should print 'blah blah'
app.get('/repeat/:term/:count', function(req, res){
    var term = req.params.term;
    var count = Number(req.params.count);
    var string = "";
    for (let i = 0; i <= count; i++){
        string += term + " ";
    }
    res.send(string);
})


// Tell Express to listen for requests (start server)
app.listen(3000, function(){
    console.log('Server listening on port 3000');
})