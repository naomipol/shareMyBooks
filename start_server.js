var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static('app'));
app.use(bodyParser.json());


var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('shareMyBooks app listening at http://' + host + ':' + port);

})