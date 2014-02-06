function route(handle, pathname, response) {
	console.log("Routing a request for " + pathname);
	if(typeof handle[pathname] === 'function') {
		handle[pathname](response);
	} else {
		console.log("No request handler found for " + pathname);
		response.writeHead(404, {"Content-Type": "text/plain"});
		response.write("Cats have knocked this page off the web and hidden it under your couch");
		response.end();
	}
}

exports.route = route;