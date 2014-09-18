//Tie Routes to Promise States
 
var middleware = require('./middleware.js');
app.get('example/uri', function(req, res, next) {
  middleware(req, res).then(function(result) {
    // Call next() or res.send(), res.json(), etc.
  }).catch(function(err) {
    // Call res.send() res.json(), etc.
  }).done();
});
