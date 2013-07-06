var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

fs.readFile('index.html', function(err, data)
{
    if(err) throw err;
    var string = data.toString('utf8');
});

app.get('/', function(request, response) {
  response.send(string);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
