appModule.factory('LoginFactory', function() {
  var factory = {};
  factory.user;

  factory.logOut = function() {
  	factory.user = null;
  }

  return factory;
});