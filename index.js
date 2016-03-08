var express = require('express');
var bodyParser = require('body-Parser');
var jsonParser = bodyParser.json();
var mongoose = require('mongoose');
var data = require('./database.js')
var Q = require('q');
var app = express();
data(app);
// express middleware to throw public file to client
app.use('/public', express.static(__dirname + '/public'));
// root directory
app.get('/',function(req,res){
    res.sendFile(__dirname + '/public/index.html');
});

//login middleware
app.use('/login/validation',jsonParser,function(req,res,next){
    console.log(req.body);
    next();
});
app.post('/login/validation',function(req,res){
    res.send('success');
});

// Sign-up page post methods with middleware to save user to database
app.use('/signup/validation',jsonParser,function(req,res,next){
    var username = req.body.userName.toString();
    var password = req.body.password.toString();
    var email= req.body.emailAddress.toString();
    app.saveUser(username,password,email)
     next()
})
app.post('/signup/validation',function(req,res){
    res.send('success');
});
//sets up server through express
var server = app.listen(8080,function(){
    var host= server.address().address;
    var port = server.address().port;
    console.log('App listening at http://%s:%s',host,port);
});


