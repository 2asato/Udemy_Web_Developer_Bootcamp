var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cat_app', { useNewUrlParser: true, useUnifiedTopology: true });

// adding a new cat to the DB


// retrieve all cats from the DB and console.log each one