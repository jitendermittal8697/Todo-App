const express = require('express');
const app = express();
const controller = require('./controller/controller');

// var { generateToken, verifyUser} = controller;
// verifyUser(generateToken({data: 'Jitu'}));
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.get('/', (req, res) => {
    res.render('user/registration', {
        query: 'registration'
    });
})
app.get('/login', (req, res) => {
    res.render('user/login', {
        query: 'login'
    });
})



app.listen(3000, function (req, res) {
    console.log('Server Started On Port 3000');
})