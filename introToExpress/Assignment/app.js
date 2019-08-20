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
    var animal = req.params.animalName;
    if (animal === 'pig'){
        res.send("The " + animal + " says 'Oink'");
    } else if (animal === 'cow'){
        res.send("The " + animal + " says 'Moo'");
    } else if (animal === 'dog'){
        res.send("The " + animal + " says 'Woof Woof!'");
    } else if (animal === 'horse'){
        res.send("The " + animal + " says 'Neigh Neigh'");
    } else if (animal === 'cat'){
        res.send("The " + animal + " says 'Meow'");
    } else {
        res.send("SSSSHHHH")
    }
})



// Tell Express to listen for requests (start server)
app.listen(3000, function(){
    console.log('Server listening on port 3000');
})