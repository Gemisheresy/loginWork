var express = require('express');
var bodyParser = require('body-Parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var app = express();

app.use('/public', express.static(__dirname + 'public/'))

app.get('/login',function(req,res){
    res.sendFile(__dirname + '/index.html');
});


app.use('/welcome',urlencodedParser,function(req,res,next){
    console.log(req.body);
    next();
});
app.post('/welcome',function(req,res){
    res.sendFile(__dirname + '/welcome.html');
});

var server = app.listen(8080,function(){
    var host= server.address().address;
    var port = server.address().port;
    console.log('App listening at http://%s:%s',host,port);
});