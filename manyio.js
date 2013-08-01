var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var file = fs.readFileSync('index11a.html', 'utf-8');
var buf = new Buffer(file, 'utf-8');

app.get('/', function(request, response) {
  response.send(buf.toString('utf-8'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
