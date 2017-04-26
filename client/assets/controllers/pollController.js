appModule.controller('PollController', function($scope, $location, $routeParams, LoginFactory, PollsFactory) {
	$scope.poll = {};
	$scope.user;

	if(LoginFactory.user) {
		$scope.user = LoginFactory.user;
	} else {
		$location.url('/');
	};

	var index = function() {
		PollsFactory.show($routeParams.id, function(data) {
			console.log(data);
			$scope.poll = data;
		});	
	};
	index();

	$scope.upvote1 = function() {
		PollsFactory.upvote1($routeParams.id, index);
	};
	
	$scope.upvote2 = function() {
		PollsFactory.upvote2($routeParams.id, index);
	};

	$scope.upvote3 = function() {
		PollsFactory.upvote3($routeParams.id, index);
	};

	$scope.upvote4 = function() {
		PollsFactory.upvote4($routeParams.id, index);
	};
});