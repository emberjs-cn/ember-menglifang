var static = require('node-static');

// Create a node-static server instance to serve the './examples' folder
var file = new static.Server('./');
var port = process.argv[2] || 8000;
console.log("Server started, visit http://localhost:" + port + "/examples");
require('http').createServer(function (request, response) {
  request.addListener('end', function () {
    file.serve(request, response);
  }).resume();
}).listen(port);
