const express = require('express');
const path = require('path');
const pug = require('pug');
const app = express();

// Define the port to run on
app.set('port', 3000);

app.use(express.static(path.join(__dirname, 'public')));

// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Starting application on port ' + port);
});

