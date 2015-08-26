var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.post('/ws-test', function (req, res) {

  console.log(req.body);
  res.sendStatus(200);

});

console.log("Waiting ....");
app.listen(4000,"127.0.0.1",function() {

  console.log('server STARTED on: %s:%d',
              this.address().address,
              this.address().port
             );

});
