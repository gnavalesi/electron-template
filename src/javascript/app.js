(function () {
	'use strict';

	var _templateBase = './views/';

	angular.module('app', ['ngRoute'])
		.config(['$routeProvider', function ($routeProvider) {
			$routeProvider.when('/', {
				templateUrl: _templateBase + 'start.html',
				controller: 'StartController',
				controllerAs: '_ctrl'
			});
			$routeProvider.otherwise({redirectTo: '/'});
		}
		]);

})();