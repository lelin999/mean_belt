appModule.controller('DashboardController', function($scope, $location, LoginFactory, PollsFactory) {
	$scope.polls = [];
	$scope.user;

	if(LoginFactory.user) {
		$scope.user = LoginFactory.user;
	} else {
		$location.url('/');
	};

	var index = function() {
		PollsFactory.index(function(data) {
			console.log(data);
			$scope.polls = data;
		});	
	};
	index();

	$scope.delete = function(id) {
		PollsFactory.delete(id, index);
	};

	$scope.logout = function() {
		LoginFactory.logOut();
	};
});