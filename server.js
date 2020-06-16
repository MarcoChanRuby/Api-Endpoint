var express = require('express');
var bodyParser = require('body-parser');
var pg = require('pg');
var app = express();

app.set('port', process.env.PORT || 5000);
app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/balanceHistory', function(request, response) {
    var nameString = request.query.name;
    var historyString = request.query.history;
    
      var jsonContent = {
            balance: 900000,
            history: [{type: "Top up", date: 2020-06-16, venue: "ABC Supermarket", amt: 10000}, {type: "Used", date: 2020-06-17, venue: "BBC Store", amt: 9898}}],
        };

    response.send(JSON.parse(JSON.stringify(jsonContent)));
    
});


app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
