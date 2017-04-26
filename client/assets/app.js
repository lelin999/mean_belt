var appModule = angular.module('app', ['ngRoute']);

appModule.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: "partials/login.html"
		})
		.when('/dashboard', {
			templateUrl: "partials/dashboard.html"
		})
		.when('/poll/:id', {
			templateUrl: "partials/poll.html"
		})
		.when('/create', {
			templateUrl: "partials/create.html"
		})
		.otherwise({
			redirectTo: ('/')
		});
});