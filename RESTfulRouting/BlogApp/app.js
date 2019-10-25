// APP config
var express = require('express'),
app = express(),
bodyParser = require('body-parser'),
mongoose = require('mongoose'),
methodOverride = require('method-override'),
expressSanitizer = require('express-sanitizer')


// configure mongoose
mongoose.connect('mongodb://localhost/blog_app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(expressSanitizer())
app.use(methodOverride('_method'));

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
    req.body.blog.body = req.sanitize(req.body.blog.body);
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
            res.render('show', { blog: foundBlog })
        }
    })
})

// edit route
app.get('/blogs/:id/edit', function(req, res) {
    Blog.findById(req.params.id, function(err, foundBlog) {
        if(err) {
            res.redirect('/blogs')
        } else {
            res.render('edit', { blog: foundBlog })
        }
    })
})

// update route
app.put("/blogs/:id", function(req, res) {
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog) {
        if(err){
            res.redirect('/blogs')
        } else {
            res.redirect('/blogs/' + req.params.id);
        }
    })
});

// delete route
app.delete('/blogs/:id', function(req, res) {
    Blog.findByIdAndRemove(req.params.id, function(err) {
        if(err){
            res.redirect('/blogs')
        } else {
            res.redirect('/blogs')
        }
    })
})




// Tell Express to listen for requests (start server)
app.listen(3000, function(){
    console.log('Blog App server has started on port 3000');
})
