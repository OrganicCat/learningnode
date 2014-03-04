var redis = require("redis"),
  xtend = require("xtend"),
  client = redis.createClient();

function createPlayer(callback) {

  var getPlayer = function(playerCallback) {   
    client.get('player', function(err, object) {
      var player = {
          name: "Captain Jack",
          hp: 10,
          level: 1
      };
      
      client.set('player', JSON.stringify(player));
      playerCallback(player);
    });    
  };

  getPlayer(function (object) {
    console.log('Object: ', object);
    // object = JSON.parse(object);
    callback(null, object);
  });
}

exports.createPlayer = createPlayer;