appModule.factory('OBJECTS1Factory', function($http) {
  var factory = {};
  var <OBJECTS> = [];

  factory.index = function(callback) {
  	$http.get('/<OBJECT>').then(function(jsonRes) {
  		if (jsonRes.data.message === "Success") {
        //calling the objects from the db.
  			<OBJECTS> = jsonRes.data.<OBJECTS>;
  			callback(<OBJECTS);	
  		} else {
  			callback(false);
  		}
  	});
  };

  factory.create = function(newOBJECT, callback) {
  	$http.post('/<OBJECT>', newOBJECT).then(function(jsonRes) {
  		if (jsonRes.data.message === "Success") {
        //callback can be a message or whatever
  			callback("Creation success");
  		} else {
        callback("Creation failed");
      }
  };

  factory.update = function(id, callback) {
    $http.put('/<OBJECT>/' + id).then(function(jsonRes) {
      // callback
    });
  };

  factory.delete = function(id, callback) {
    $http.delete('/<OBJECT>/' + id).then(function(jsonRes) {
      if (jsonRes.data.message === "Success") {
        callback(true);
      } else {
        callback(false);
      }
    });
  };

  return factory;
});