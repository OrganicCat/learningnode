var redis = require('redis'),
	mob = require('./models/mob'),
	client = redis.createClient(),
	async = require('async');

function start(request, response) {
	response.render('index', { title: 'Express' });
}

// Function handles rendering of /home and post request for the same
function home(request, response) {
	
	async.series([
		function(callback) {
			mob.createMobs(callback)
		}
		// Enter more functions here
		],
		function(err, results) {
			console.log('test');
			if(err) {
				console.log('Error: ', err);
			}	else {
				response.render('home', results);
			}
		}
	);

}

exports.start = start;
exports.home = home;