appModule.controller('<OBJECT1>Controller', function($scope, LoginFactory, OBJECTS1Factory) {
	$scope.<OBJECTS1> = [];

	//login if necessary
	$scope.login = function() {
		LoginFactory.user = $scope.user;
		$scope.loggedIn = $scope.user;
	};
	//need these lines on every controller
	if(LoginFactory.user) {
		$scope.user = LoginFactory.user;
	} else {
		$location.url('/');
	};

	var index = function() {
		OBJECTS1Factory.index(function(data) {
			console.log(data);
			$scope.<OBJECTS1> = data;
		});	
	};
	index();

	// $scope.createCustomer = function() {
	// 	customersFactory.createCustomer($scope.newCustomer, function(message) {
	// 		$scope.messages = message;
	// 		$scope.newCustomer = null;
	// 		customersFactory.giveCustomers(getCustomers);
	// 	});
	// };

	// $scope.deleteCustomer = function(id) {
	// 	customersFactory.deleteCustomer(id, function(data) {
	// 		if (data) {
	// 			$scope.messages = "Deletion successful";	
	// 		} else {
	// 			$scope.messages = "That shit is still here";
	// 		}
	// 		customersFactory.giveCustomers(getCustomers);
	// 	});
	// };
});