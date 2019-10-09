var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cat_app', { useNewUrlParser: true, useUnifiedTopology: true });

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

// adding a new cat to the DB


// retrieve all cats from the DB and console.log each one