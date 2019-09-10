var express = require('express');
var app = express();

// '/' route
app.get('/', function(req, res){
    res.render("home.ejs");
})

app.get('/fallinlovewith/:thing', function(req, res){
    var thing = req.params.thing;
    // passes :thing under thingVar to HTML
    res.render("love.ejs", {thingVar: thing});
})

app.get('/posts', function(req, res){
    var posts = [
        {title: 'post 1', author: 'Susy'},
        {title: 'My adorable pet bunny', author: 'Charlie'},
        {title: 'Can you believe this pomsky', author: 'Colt'}
    ];
    res.render('posts.ejs', {posts: posts})
})







// Tell Express to listen for requests (start server)
app.listen(3000, function(){
    console.log('Server listening on port 3000');
})
