const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;
const exphbs  = require('express-handlebars');



// Set handlebar
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Set handlebar routes
app.get('/', function (req, res) {
    res.render('home');
});

//creat about page route
app.get('/portfolio', function (req, res) {
    res.render('portfolio', {title : 'Wet Food'});
});

app.get('/dryfood', function (req, res) {
    res.render('dryfood', {title : 'Dry Food'});
});

app.get('/catnip', function (req, res) {
    res.render('catnip', {title : 'catnip'});
});

// Set static folder
app.use(express.static(path.join(__dirname, '/public')));

app.listen(PORT, ()=> console.log('server listening on port ' + PORT))



