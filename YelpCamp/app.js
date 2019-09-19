var express = require('express');
var app = express();

// campgrounds array
var campgrounds = [
    {name: 'Salmon Creek', image: 'https://live.staticflickr.com/89/249248726_74274d7fde_m.jpg'},
    {name: 'Granite Hill', image: 'https://farm6.staticflickr.com/5175/5534712299_d98b73b8f4_m.jpg'},
    {name: 'Mountain Goat\'s Rest', image: 'https://live.staticflickr.com/3100/2564509897_e59ac5b2ca_m.jpg'}
]

app.set('view engine', 'ejs');

// landing page
app.get('/', function(req, res) {
    res.render('landing')
})

// campground page
app.get('/campgrounds', function(req, res) {
    res.render('campgrounds', {campgrounds: campgrounds})
})

// Tell Express to listen for requests (start server)
app.listen(3000, function(){
    console.log('Yelp Camp server has started on port 3000');
})