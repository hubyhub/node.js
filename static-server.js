var express = require('express');
var app = express();

app.use('/', express.static(__dirname+'/src') );
app.listen(3000, function() { console.log('Server running at 127.0.0.1:3000');});