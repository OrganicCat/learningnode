// Requres http server module
var http = require("http");

// Sets up server with request/response callback function that responds with a 
// positive (200) plain-text response with "Hello World" and then sends the end
// response to the browser
http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello World");
	response.end();
}).listen(8888);