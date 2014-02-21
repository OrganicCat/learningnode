var querystring = require("querystring"),
	fs = require("fs"),
	formidable = require("formidable");

function start(request, response) {
	response.render('index', { title: 'Express' });
}

// Function handles rendering of /home and post request for the same
function home(request, response) {
	// More elegant solution for setting cat name based on if passed
	var catname = request.body.mycatname ? request.body.mycatname : '';
	console.log("catname ", catname);
	var bodyResponse = {
		title: 'Cats in this bag',
		mycatname: catname
	};
	response.render('home', bodyResponse);
}

exports.start = start;
exports.home = home;