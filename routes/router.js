var url = require("url");

function setup(app) {
	// Add function like old router to check for routing function, and then pass to said function

	// Base test call, move into request handler as soon as possible
	// * pass the request, get the handler from that
	app.get('/', function(request, response){
		var pathname = url.parse(request.url).pathname;
		console.log("pathname " + pathname);
	  response.render('index', { title: 'Express' });
	});
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