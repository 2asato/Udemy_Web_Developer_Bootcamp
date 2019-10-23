// express
var express = require('express'),
app = express(),
// body-parser
bodyParser = require('body-parser'),
// mongoose
mongoose = require('mongoose');

// configure mongoose
mongoose.connect('mongodb://localhost/blog_app', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));






// Tell Express to listen for requests (start server)
app.listen(3000, function(){
    console.log('Blog App server has started on port 3000');
})
