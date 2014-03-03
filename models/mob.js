var redis = require('redis'),
  xtend = require('xtend'),
	client = redis.createClient();

var mob = [{
    name: "Globlin",
    hp: 10,
    level: 1
},
{
    name: "Orcses",
    hp: 20,
    level: 2
},
{
    name: "Uruk-hai",
    hp: 30,
    level: 3
}];

function createMobs(callback) {

  client.hmset('monsterlist', 'mobs', JSON.stringify(mob));  
  
	var	getMobs = function(mobCallback) {   
    client.hgetall('monsterlist', function(err, object) {
    	mobCallback(object);
    });    
	};
  
  getMobs(function(object) {
    console.log(object);
    object.mobs = JSON.parse(object.mobs);
    callback(null, object.mobs);
  });

}

exports.createMobs = createMobs;