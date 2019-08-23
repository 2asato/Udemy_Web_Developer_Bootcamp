var express = require('express');
var app = express();

// '/' route
app.get('/', function(req, res){
    res.render("home.ejs");
})








// Tell Express to listen for requests (start server)
app.listen(3000, function(){
    console.log('Server listening on port 3000');
})