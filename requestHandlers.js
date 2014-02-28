var redis = require("redis"),
	client = redis.createClient();

function start(request, response) {
	response.render('index', { title: 'Express' });
}

// Function handles rendering of /home and post request for the same
function home(request, response) {
	
	// Trying redis
	client.on("error", function (err) {
		console.log("Error " + err);
	});

	// More elegant solution for setting cat name based on if passed
	var catname = request.body.mycatname ? request.body.mycatname : '';
	
	var bodyResponse = {
		title: 'Cats in this bag',
		mycatname: catname
	};

	client.set("name", catname, redis.print);

	var monsterlist = client.hmget("monsterlist", function(err) {
		console.log("monster list not found, creating it");
		monsterlist = mob.createMobs(client);
		console.log("monsterlist" + monsterlist);
	});

	monsterlist = client.hmget("monsterlist", function(err) {
		console.log("still nothing?");
	});

	client.quit();

	response.render('home', bodyResponse);
}

exports.start = start;
exports.home = home;