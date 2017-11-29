var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var PORT = 8080 || process.env.PORT;

app.use(express.static(path.join(__dirname, './app/public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

app.listen(PORT, function() {
  console.log('LISTENING ON PORT: ' + PORT);
});
