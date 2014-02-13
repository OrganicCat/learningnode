function setup(app, requestHandlers) {
	// Add function like old router to check for routing function, and then pass to said function

	// Base test call, move into request handler as soon as possible
	// * pass the request, get the handler from that
	app.get('/', requestHandlers.start2);
}

exports.setup = setup;

/*
function route(handle, pathname, response, request) {
	console.log("Routing a request for " + pathname);
	if(typeof handle[pathname] === 'function') {
		handle[pathname](response, request);
	} else {
		console.log("No request handler found for " + pathname);
		response.writeHead(404, {"Content-Type": "text/plain"});
		response.write("Cats have knocked this page off the web and hidden it under your couch");
		response.end();
	}
}
*/