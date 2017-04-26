var appModule = angular.module('app', ['ngRoute']);

appModule.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 
		});

		.otherwise({
			redirectTo: ('/')
		});
});