var express = require('express');
var app = express();
app.use(express.static(__dirname + '/privee'));

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

app.listen(2000, function () {
  console.log('Example app listening on port 2000!');
});
