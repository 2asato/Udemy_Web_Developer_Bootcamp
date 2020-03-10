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
router.post('/', isLoggedIn, function(req, res) {
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    }
    var newCampground = {name: name, image: image, description: desc, author:author}

    // create new campground and save to db
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
            
        } else {
            console.log(newlyCreated);
            
            // redirect to campgrounds page
            res.redirect('/campgrounds');

        }
    })
})

// new route - show form to create new campground
// add new campground page
router.get('/new', isLoggedIn, function(req, res) {
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

// EDIT Campground ROUTE
router.get('/:id/edit', function(req, res){
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            res.redirect('/campgrounds')
        } else {
            res.render('campgrounds/edit', { campground: foundCampground})
        }
    });
});

// UPDATE Campground ROUTE
router.put('/:id', function(req, res){
    //find and update the correct campground
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
        if(err){
            res.redirect('/campgrounds');
        } else {
            res.redirect('/campgrounds/' + req.params.id);
        }
    })
    // redirect to show page
})

// use currentUser on all pages
router.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
})

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/login');
}

module.exports = router;
