appModule.controller('CreateController', function($scope, $location, LoginFactory, PollsFactory) {
	$scope.user;

	if(LoginFactory.user) {
		$scope.user = LoginFactory.user;
	} else {
		$location.url('/');
	};

	$scope.create = function() {
		$scope.newpoll.name = $scope.user;
		$scope.newpoll.option1Vote = 0;
		$scope.newpoll.option2Vote = 0;
		$scope.newpoll.option3Vote = 0;
		$scope.newpoll.option4Vote = 0;
		PollsFactory.create($scope.newpoll, function(data) {
			if (!data) {
				$scope.messages = "Need to fill out all questions/options.";
			} else {
				$location.url('/dashboard');
			}
		});
	};
});