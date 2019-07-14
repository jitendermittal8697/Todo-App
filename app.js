var express = require('express');
var app = express();
var middleware = require('./middleware/generateToken');

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.get('/',(req,res)=>{
    res.render('user/registration', {query : 'registration'});
})
app.get('/login',(req,res)=>{
    res.render('user/login', {query : 'login'});
})
app.listen(3000,function(req,res){
    console.log('Server Started On Port 3000');
})