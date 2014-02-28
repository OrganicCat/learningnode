
function createMobs(client) {
	client.hmset("monsterlist", "TestList", "morelist");
	client.hgetall("monsterlist", function(err, obj) {
		console.log(obj);
	});

	client.quit();
}

exports.createMobs = createMobs;