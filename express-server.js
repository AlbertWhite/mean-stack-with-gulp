var express = require('express');
var app = express();

app.use(require('connect-livereload')());
app.use(express.static("public"));

app.get('/api/numbers', function (req, res) {
  var numbers = [1,2,3,4,5];
  res.json(numbers);
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});