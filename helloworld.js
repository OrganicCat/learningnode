// Requres http server module
var http = require("http");

// Lets change this to a function so that we can make a dyanmic
// instead of a hardcoded one
function onRequest(request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello World");
	response.end();
}

// Pass in our request/response function
http.createServer(onRequest).listen(8888);