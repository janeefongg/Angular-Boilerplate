var express = require('express');
var moment = require('moment');

var app = express();

app.use(express.static('./client'));
app.set('port', process.env.PORT || 8080);

app.listen(app.get('port'), function () {
  console.log('[' + moment().format('hh:mm:ss') + ']' + ' Express Server listening on port', app.get('port'));
})