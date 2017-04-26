appModule.controller('LoginController', function($scope, $location, LoginFactory) {
	$scope.user = null;

	$scope.login = function() {
		LoginFactory.user = $scope.user;
		$location.url('/dashboard');
	};

	if(LoginFactory.user) {
		$scope.user = LoginFactory.user;
	} else {
		$location.url('/');
	};

});