function setup(app, requestHandlers) {
	// Route requests to proper requestHandler function

	// Get requests
	app.get('/', requestHandlers.start);
	app.get('/home', requestHandlers.home);

	// Post requests
	app.post('/home', requestHandlers.home);
}

exports.setup = setup;