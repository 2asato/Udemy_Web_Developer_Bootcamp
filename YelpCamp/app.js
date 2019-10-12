var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// schema setup
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String
});

// campground model
var Campground = mongoose.model('Campground', campgroundSchema);

Campground.create({
    name: 'Granite Hill', image: 'https://pixabay.com/get/57e8d0424a5bae14f6da8c7dda793f7f1636dfe2564c704c732773d39f44c35f_340.jpg'
},function(err, campground){
    if(err){
        console.log(err);
        
    } else {
        console.log('NEWLY CREATED CAMPGROUND: ');
        console.log(campground);
        
    }
})

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

// campground page
app.get('/campgrounds', function(req, res) {
    // Get all campgrounds from DB instead of campgrounds array
    
    // res.render('campgrounds', {campgrounds: campgrounds})
})

// new campground page
app.post('/campgrounds', function(req, res) {
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image}
    campgrounds.push(newCampground);
    // redirect to campgrounds page
    res.redirect('/campgrounds');
})

// add new campground page
app.get('/campgrounds/new', function(req, res) {
    res.render('new.ejs')
})

// Tell Express to listen for requests (start server)
app.listen(3000, function(){
    console.log('Yelp Camp server has started on port 3000');
})