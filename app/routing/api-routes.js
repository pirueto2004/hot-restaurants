var tableData = require('../data/table-data.js');
var waitListData = require('../data/waitinglist-data.js');

//Exporting the data to another js files
module.exports = function(app) {
    //Display the tableData in json format
    app.get('/api/tables', function(req, res){
        res.json(tableData);
    });

    //Display the waitingListData in json format
    app.get('/api/waitlist', function(req, res){
        res.json(waitListData);
    });

     //Update with POST the tableData when a new reservation is made
     app.post('/api/tables', function(req, res){
        if(tableData.length < 5) {
            tableData.push(req.body);
            res.json(true);
        } else {
            waitListData.push(req.body);
            res.json(false);
        }
    });

    //Clear with POST the tableData and waitingListData when you click on 'Clear Table' link
    app.post('/api/clear', function(){
        tableData = [];
        waitListData = [];
        console.log(tableData);
        console.log(waitListData);
    });

}