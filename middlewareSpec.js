//Test Promise Resolutions
 
var httpMocks = require('node-mocks-http');
 
var middleware = require('path/to/middleware');
var req = httpMocks.createRequest(),
    res = httpMocks.createResponse();
 
describe('middleware', function() {
  it ('resolves under condition X with result Y', function (done) {
    middleware.(req, res).then(function(result) {
      // Assert
    }).finally(done).done();
  });
});
