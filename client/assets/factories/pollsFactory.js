appModule.factory('PollsFactory', function($http) {
  var factory = {};
  var polls = [];

  factory.index = function(callback) {
  	$http.get('/polls').then(function(jsonRes) {
  		if (jsonRes.data.message === "Success") {
        //calling the objects from the db.
  			polls = jsonRes.data.polls;
  			callback(polls);	
  		} else {
  			callback(false);
  		}
  	});
  };

  factory.show = function(id, callback) {
    $http.get('/polls/' + id).then(function(jsonRes) {
      if (jsonRes.data.message === "Success") {
        callback(jsonRes.data.poll);
      } else {
        callback(false);
      }
    });
  };

  factory.create = function(newpolls, callback) {
  	$http.post('/polls', newpolls).then(function(jsonRes) {
  		if (jsonRes.data.message === "Success") {
  			callback("Creation success");
  		} else {
        callback(false);
      }
    });
  };

  factory.upvote1 = function(id, callback) {
    console.log("did i even get here")
    $http.put('/polls/upvote1/' + id).then(function(jsonRes) {
      console.log("something is here", jsonRes)
      if (jsonRes.data.message === "Success") {
        callback(true);
      } else {
        callback(false);
      }
    });
  };

  factory.upvote2 = function(id, callback) {
      $http.put('/polls/upvote2/' + id).then(function(jsonRes) {
        if (jsonRes.data.message === "Success") {
          callback(true);
        } else {
          callback(false);
        }
      });
    };

  factory.upvote3 = function(id, callback) {
    $http.put('/polls/upvote3/' + id).then(function(jsonRes) {
      if (jsonRes.data.message === "Success") {
        callback(true);
      } else {
        callback(false);
      }
    });
  };

  factory.upvote4 = function(id, callback) {
    $http.put('/polls/upvote4/' + id).then(function(jsonRes) {
      if (jsonRes.data.message === "Success") {
        callback(true);
      } else {
        callback(false);
      }
    });
  };

  factory.delete = function(id, callback) {
    $http.delete('/polls/' + id).then(function(jsonRes) {
      if (jsonRes.data.message === "Success") {
        callback(true);
      } else {
        callback(false);
      }
    });
  };

  return factory;
});