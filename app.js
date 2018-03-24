var express = require('express');
var path = require('path');
var expressHandlebars = require('express-handlebars');
var app = express();

//View Engine
app.set('views', path.join(__dirname,'views'));
app.engine('handlebars', expressHandlebars({defaultLayout:'layout'}));
app.set('view engine','handlebars');

//
app.get('/', function(req,res){
    res.render('index');
});

//login 
app.get('/login', function(req, res){
    res.render('login');
});

//Register
app.get('/register', function(req,res){
    res.render('register');
});

//SendMessage
app.get('/sendmessage',function(req,res){
    res.render('sendmessage');
});

//Set port to listen
app.listen(3000, function(){
    console.log("connected");
});