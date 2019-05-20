var bodyParser = require('body-parser');
var express = require('express');
var path = require('path'); //Node.js built-in package
var app = express();
var PORT = process.env.PORT || 8080;


//Define routes here..
// app.get('/', function (req, res) {
//     res.send('<html><body><h1>Hello World</h1></body></html>');
// });

// app.post('/submit-data', function (req, res) {
//     res.send('POST Request');
// });

// app.put('/update-data', function (req, res) {
//     res.send('PUT Request');
// });

// app.delete('/delete-data', function (req, res) {
//     res.send('DELETE Request');
// });

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());


//Includes html-routes.js and api-routes.js in the server.js file and use Express
require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);


var server = app.listen(PORT, function () {
    console.log('App listening on PORT: ' + PORT);
});