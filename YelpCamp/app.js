var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Campground = require('./models/campground');




// Campground.create({
//     name: 'Granite Hill', 
//     image: 'https://pixabay.com/get/57e8d0424a5bae14f6da8c7dda793f7f1636dfe2564c704c732773d39f44c35f_340.jpg',
//     description: 'This is a huge granite hill, no bathrooms. No water. Beautiful granite!'
// },function(err, campground){
//     if(err){
//         console.log(err);
        
//     } else {
//         console.log('NEWLY CREATED CAMPGROUND: ');
//         console.log(campground);
        
//     }
// })

// campgrounds array
// var campgrounds = [
//     {name: 'Salmon Creek', image: 'https://pixabay.com/get/57e1d14a4e52ae14f6da8c7dda793f7f1636dfe2564c704c732773d39f44c35f_340.jpg'},
//     {name: 'Granite Hill', image: 'https://pixabay.com/get/57e8d0424a5bae14f6da8c7dda793f7f1636dfe2564c704c732773d39f44c35f_340.jpg'},
//     {name: 'Mountain Goat\'s Rest', image: 'https://pixabay.com/get/55e8dc404f5aab14f6da8c7dda793f7f1636dfe2564c704c732773d39f44c35f_340.jpg'}
// ]

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
            res.render('index', {campgrounds:allCampgrounds})
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
    res.render('new.ejs')
})

// SHOW - shows more info about one campground
app.get('/campgrounds/:id', function(req, res) {
    // find the campground with provided ID
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
            
        } else {
            res.render('show', {campground: foundCampground})
        }
    });
})

// Tell Express to listen for requests (start server)
app.listen(3000, function(){
    console.log('Yelp Camp server has started on port 3000');
})