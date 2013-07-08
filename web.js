var express = require('express');
var fs = require('fs');
var buf = require('buf');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
	index_data = fs.readFileSync('index.html');
	index_string = buf.toString(index_data);
	response.send(index_string);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});