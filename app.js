var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendfile('test.html');
});

app.get('/docs', function (req, res) {
  res.sendfile('docs.html');
});

app.get('/topic', function (req, res) {
  res.sendfile('topic.html');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});