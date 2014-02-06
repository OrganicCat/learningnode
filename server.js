// Requres http server module
var http = require("http");
// Whoa shizzle, a new module that can parse the url of the request?
// What sorcery is this?
var url = require("url");

// We are now passing the route function from the router module here
function start(route) {
	function onRequest(request, response) {

		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received");

		// About to get our routing on
		route(pathname);

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