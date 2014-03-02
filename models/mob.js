var redis = require("redis"),
  xtend = require("xtend"),
	client = redis.createClient();

function createMobs(response) {

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

/*
  mob.map(function (currentItem) {
    return JSON.stringify(currentItem);
  });
*/
  
  console.log("got here");

  client.hmset("monsterlist", "mobs", JSON.stringify(mob));  
  
	var	getMobs = function(callback) {   
    client.hgetall("monsterlist", function(err, object) {
    	callback(object);
    });    
	};

  getMobs(function(object) {
    var bodyResponse = {
      title: 'Cats in this bag',
      mycatname: "Mr. Meows"
    };

    object.mobs = JSON.parse(object.mobs);
    console.log(object);
    //object = JSON.parse(object);
    /*
    object.map(function (currentItem) {
      return JSON.parse(currentItem);
    });
*/

    response.render('home', object);
  });

}

exports.createMobs = createMobs;