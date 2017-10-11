var express = require('express');
var path = require('path');
require('dotenv').config();
var app = express();
var port = process.env.PORT || 5000;

app.use(express.static('server/public'));

// Using requst module to make HTTP requests from the server
// https://www.npmjs.com/package/request
var request = require('request');

// API Key & username are environment variables in Heroku
// var token = process.env.TOKEN_NAME;

app.use(express.static('public'));

// passport stuff
// var user_options = {
//     url: 'https://api.github.com/users/' + username,
//     headers: {
//         'User-Agent': 'request',
//         'Authorization': 'token ' + oauthToken
//     }
// };

// Moved API call into server to protect oAuthToken
// app.get('/github/user', function (req, res) {
//     request(user_options, function (error, response, body) {
//         if (response && response.statusCode == 200) {
//             res.send(body);
//         } else {
//             res.sendStatus(500);
//         }
//     });
// });

app.listen(port, function () {
    console.log('localhost running on port', port);
});