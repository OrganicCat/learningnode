function setup(app, requestHandlers) {
	// Add function like old router to check for routing function, and then pass to said function

	// Base test call, move into request handler as soon as possible
	// * pass the request, get the handler from that
	app.get('/', requestHandlers.start);
	app.get('/home', requestHandlers.home);

}

exports.setup = setup;