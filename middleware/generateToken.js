var fs = require('fs');
var jwt = require('jsonwebtoken');

var publicKey = fs.readFileSync('./config/public.key', 'utf-8');
var privateKey = fs.readFileSync('./config/private.key','utf-8');

var token = jwt.sign({data:'jitu'}, privateKey,{algorithm: 'RS256'});
console.log(token);
var legit = jwt.verify(token,publicKey,{algorithm: 'RS256'});
console.log(legit);
