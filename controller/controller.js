const fs = require('fs');
const jwt = require('jsonwebtoken');

const publicKey = fs.readFileSync('./config/public.key', 'utf-8');
const privateKey = fs.readFileSync('./config/private.key', 'utf-8');

const generateToken = function (data) {
    let token = jwt.sign(data, privateKey, {
        algorithm: 'RS256'
    });
    console.log(token);
    return token;
}
const verifyUser = function (token) {
    var legit = jwt.verify(token, publicKey, {
        algorithm: 'RS256'
    });
    console.log(legit);
    return legit;
}

module.exports = {
    generateToken,
    verifyUser,
}