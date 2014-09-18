//Promise Behavior
 
var Q = require('q');
 
module.exports = function(req, res) {
  return Q.promise(function (resolve, reject) {
    // Define middleware behavior and resolve or reject promises accordingly.
  });
};
