var redis = require("redis"),
  xtend = require("xtend"),
  client = redis.createClient();

function createPlayer(callback) {

  var getPlayer = function(playerCallback) {   
    client.hgetall("player", function(err, object) {
      if(err) {
        var player = {
            name: "Captain Jack",
            hp: 10,
            level: 1
        };
        client.hset("player", JSON.stringify(player));
        playerCallback(object);
      } else {
        object = JSON.parse(object);
        playerCallback(object);
      }
    });    
  };

  getPlayer(function (object) {
    response.render('home', object);
  });
}

exports.createPlayer = createPlayer;