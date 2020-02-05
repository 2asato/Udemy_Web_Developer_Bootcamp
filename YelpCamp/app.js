var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Campground = require('./models/campground');
var Comment = require('./models/comment');
var seedDB = require('./seeds');
// var Comment = require('./models/comment');
// var User = require('./models/user')



seedDB();

mongoose.connect('mongodb://localhost/yelp_camp', { useNewUrlParser: true, useUnifiedTopology: true });
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

// landing page
app.get('/', function(req, res) {
    res.render('landing')
})

// index route
// campground page
app.get('/campgrounds', function(req, res) {
    // Get all campgrounds from DB instead of campgrounds array
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
            
        } else {
            res.render('campgrounds/index', {campgrounds:allCampgrounds})
        }
    })
    // res.render('campgrounds', {campgrounds: campgrounds})
})

// create route - add new campground to db
// new campground page
app.post('/campgrounds', function(req, res) {
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, image: image, description: desc}
    // create new campground and save to db
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
            
        } else {
            // redirect to campgrounds page
            res.redirect('/campgrounds');

        }
    })
})

// new route - show form to create new campground
// add new campground page
app.get('/campgrounds/new', function(req, res) {
    res.render('campgrounds/new.ejs')
})

// SHOW - shows more info about one campground
app.get('/campgrounds/:id', function(req, res) {
    // find the campground with provided ID
    Campground.findById(req.params.id).populate('comments').exec(function(err, foundCampground){
        if(err){
            console.log(err);
            
        } else {
            console.log(foundCampground)
            res.render('campgrounds/show', {campground: foundCampground})
        }
    });
})

// =============================
// COMMENTS ROUTES
// =============================

app.get('/campgrounds/:id/comments/new', function(req, res){
    // find campground by id
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
            
        } else {
            res.render('comments/new', {campground: campground})
        }
    })
})

app.post('/campgrounds/:id/comments', function(req, res){
    //lookup campground using ID
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
            res.redirect('/campgrounds')
        } else {
            //create new comment
            Comment.create(req.body.comment, function(err, comment){
                if(err){
                    console.log(err);
                    
                } else {
                    //connect new comment to campground
                    campground.comments.push(comment);
                    campground.save();
                     //redirect campground show page
                    res.redirect('/campgrounds/' + campground._id);
                }
            })
        }
    })
})

// Tell Express to listen for requests (start server)
app.listen(3000, function(){
    console.log('Yelp Camp server has started on port 3000');
})