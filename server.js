var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var pg = require('pg');
var app = express();

app.set('port', process.env.PORT || 5000);
app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/balanceHistory', function(request, response) {
    var accId = request.query.accId;
    var txnType = request.query.txnType;
    
      var jsonContent = {
            balance: 900000,
            history: [{txnId:1, txnType: "T", date: "2020-06-16", venue: "ABC Supermarket", currency: "HKD", amt: 10000}, {txnId:2, txnType: "U", date: "2020-06-17", venue: "BBC Store", currency: "HKD", amt: 9898}],
        };
    
    fs.readFile('./data/paymentHistory.json', 'utf8', (err, data) => {
        if (err) {
            throw err;
        }
         
        var result;
        var paymentData = JSON.parse(data);

        if (accId) {
          result = paymentData.filter(x => x.accId === accId);
        } else {
          result = paymentData;
        }
        
        response.setHeader('Access-Control-Allow-Origin','*');
        response.send(JSON.parse(JSON.stringify(result)));
    })
});


app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
