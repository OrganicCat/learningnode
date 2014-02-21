var querystring = require("querystring"),
	fs = require("fs"),
	formidable = require("formidable");

function start(request, response) {
	response.render('index', { title: 'Express' });
}

function home(request, response) {
	// Add new object property based on if we sent info
	
	if (request.body.mycatname) {
		var bodyResponse = {
			title: 'Cats in this bag',
			mycatname: request.body.mycatname
		};
	} else {
		var bodyResponse = {
			title: 'Cats in this bag',
			mycatname: ''
		}
	}
	response.render('home', bodyResponse);

	// Log what we submitted
	console.log("request ", request.body);
}

exports.start = start;
exports.home = home;