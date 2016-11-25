var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

vopcounter = 0;
app.get('/counter', function (req, res) {
 counter = counter + 1;
     res.send(counter.tostring());
});

app.get('/sign-up', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'sign-up.html')); 
});

app.get('/forget-password', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'forget-password.html')); 
});

app.get('/article-one', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'article-one.html')); 
});

app.get('/spot-tips', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'spot-tips.html')); 
});

app.get('/agricultural', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'agricultural.html')); 
});

app.get('/astrology', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'astrology.html')); 
});

app.get('/autotech', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'autotech.html'));
});

app.get('/education', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'education.html')); 
});

app.get('/electrical', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'electrical.html')); 
});

app.get('/finance', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'finance.html')); 
});

app.get('/food', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'food.html')); 
});

app.get('/health', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'health.html')); 
});

app.get('/life', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'life.html')); 
});

app.get('/movie', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'movie.html')); 
});

app.get('/music', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'music.html')); 
});

app.get('/technology', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'technology.html')); 
});

app.get('/contact', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'contact.html')); 
});

app.get('/about', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'about.html')); 
});

app.get('/ui/style.css', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/stylebty.css', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'stylebty.css'));
});

app.get('/ui/main.js', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
 app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
