// Requres http server module
var http = require("http");

function start() {
	function onRequest(request, response) {
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hello World");
		response.end();
	}

	// Pass in our request/response function
	http.createServer(onRequest).listen(8888);
	console.log("Server started");
}

// Exports start function
exports.start = start;