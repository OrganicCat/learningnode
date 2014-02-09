var http = require("http"),
	url = require("url"),
	express = require("express"),
	path = require("path"),
	routes = require("./router"),
	test = require("./test");
	// app_config = require("./app_config");

app = express();
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
// Sets static serving path to public directory
app.use(express.static(path.join(__dirname, 'public')));


test.expressSetup(app);
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function() {
	console.log("Express server started on port " + app.get('port'));
});
/*
function start(route, handle) {
	

	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received");
		route(handle, pathname, response, request);
	}

	
	// http.createServer(app).listen(8888);
	// console.log("Server started");
}
*/

// exports.start = start;