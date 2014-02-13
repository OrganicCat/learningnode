var http = require("http"),
	url = require("url"),
	express = require("express"),
	path = require("path"),
	routes = require("./routes/router"),
	requestHandlers = require("./requestHandlers");

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

routes.setup(app, requestHandlers);

http.createServer(app).listen(app.get('port'), function() {
	console.log("Express server started on port " + app.get('port'));
});