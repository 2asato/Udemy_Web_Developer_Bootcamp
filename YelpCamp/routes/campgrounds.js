var express = require('express'),
    router = express.Router(),
    Campground = require('../models/campground');

// index route
// campground page
router.get('/', function(req, res) {
    // Get all campgrounds from DB instead of campgrounds array
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
            
        } else {
            res.render('campgrounds/index', {campgrounds:allCampgrounds, currentUser: req.user })
        }
    })
    // res.render('campgrounds', {campgrounds: campgrounds})
})

// create route - add new campground to db
// new campground page
router.post('/', function(req, res) {
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
router.get('/new', function(req, res) {
    res.render('campgrounds/new.ejs')
})

// SHOW - shows more info about one campground
router.get('/:id', function(req, res) {
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

// use currentUser on all pages
router.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
})

module.exports = router;
