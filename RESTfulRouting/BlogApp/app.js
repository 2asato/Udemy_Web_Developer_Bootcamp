// APP config
var express = require('express'),
app = express(),
bodyParser = require('body-parser'),
mongoose = require('mongoose');

// configure mongoose
mongoose.connect('mongodb://localhost/blog_app', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

// schema
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: { type: Date, default: Date.now }
});

// blog model
var Blog = mongoose.model('Blog', blogSchema);

// RESTFUL Routes

app.get('/', function(req, res) {
    res.redirect('/blogs');
});

// index route
app.get('/blogs', function(req, res) {
    Blog.find({}, function(err, blogs) {
        if(err){
            console.log('ERROR!!!');
            
        } else {
            res.render('index', {blogs: blogs});
        }
    });
});

// new route
app.get('/blogs/new', function(req, res) {
    res.render('new')
})

// create route
app.post('/blogs', function(req, res) {
    // create blog
    Blog.create(req.body.blog, function(err, newBlog) {
        if(err) {
            res.render('new');
        } else {
            res.redirect('/blogs');
        }
    });
});

// show route
app.get('/blogs/:id', function(req, res) {
    // gets id with req.params.id
    Blog.findById(req.params.id, function(err, foundBlog) {
        if(err){
            res.redirect('/blogs')
        } else {
            // blog matches blog from show template
            res.render('show', {blog: foundBlog})
        }
    })
})




// Tell Express to listen for requests (start server)
app.listen(3000, function(){
    console.log('Blog App server has started on port 3000');
})
