var querystring = require("querystring"),
	fs = require("fs"),
	formidable = require("formidable");

function start(request, response) {
	response.render('index', { title: 'Express' });
}

function home(request, response) {
	response.render('home', { title: 'Cats in this bag'});

}

exports.start = start;
exports.home = home;