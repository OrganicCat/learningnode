var redis = require('redis'),
	mob = require('./models/mob'),
	player = require('./models/player'),
	client = redis.createClient(),
	async = require('async');

function start(request, response) {
	response.render('index', { title: 'Express' });
}

// Function handles rendering of /home and post request for the same
function home(request, response) {
	
	async.parallel({
		mobs: function(callback) {
			mob.createMobs(callback);
		},
		player: function(callback) {
			player.createPlayer(callback);
		}},
		function(err, results) {
			console.log('finish');
			if(err) {
				console.log('Error: ', err);
			}	else {
				console.log('Rendering output: ', results);
				response.render('home', results);
			}
		}
	);

}

exports.start = start;
exports.home = home;