var express = require('express'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    User = require('./models/user'),
    bodyParser = require('body-parser'),
    LocalStrategy = require('passport-local'),
    passportLocalMongoose = require('passport-local-mongoose')


mongoose.connect('mongodb://localhost/AuthDemo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

var app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(require('express-session')({
    secret: "Noodle is blind and deaf",
    resave: false,
    saveUninitialized: false
}))


app.use(passport.initialize());
app.use(passport.session());

// reading session coding and uncoding info
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ==============
// ROUTES
// ===============

app.get('/', function(req, res){
    res.render('home')
})

app.get('/secret', isLoggedIn, function(req, res){
    res.render('secret')
})

// ===============
// Auth Routes
// ==============
// show sign up form
app.get('/register', function(req, res){
    res.render('register');
})

// handling user sign up
app.post('/register', function(req, res){
    req.body.username
    req.body.password
    User.register(new User(
        {
            username: req.body.username
        }), 
        req.body.password, function(err, user){
            if(err){
                console.log(err);
                return res.render('register');
            } else {
                passport.authenticate('local')(req, res, function(){
                    res.redirect('/secret');
                })
            }
    })
})

// =========
// LOGIN ROUTES
// ===============
// render login form
app.get('/login', function(req, res){
    res.render('login');
})

// login logic
// middleware
app.post('/login', passport.authenticate('local', {
    successRedirect: '/secret',
    failureRedirect: '/login'
    }), function(req, res){

})

// =============
// LOGOUT
// ==============
app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/')
})

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/login')
}

app.listen(7000, function(){
    console.log('AuthDemo server has started on port 7000');
    
})