var path = require('path'); //Node.js built-in package

//Exporting the data to another js files
module.exports = function(app) {

    //Sends the file 'tables.html' to the web client whenever the path is '/tables'
    app.get('/tables', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/tables.html'));
    });

    //Sends the file 'reserve.html' to the web client whenever the path is '/reserve'
    app.get('/reserve', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/reserve.html'));
    });

    //Sends the file 'home.html' to the web client whenever the path is the root '/' or it is nor defined
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });
}