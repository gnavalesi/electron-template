(function () {
	'use strict';
	angular.module('app')
		.controller('StartController', ['$scope', 'StartService', StartController]);

	function StartController($scope, StartService) {
		$scope.value = false;

		$scope.toggle = function() {
			$scope.value = StartService.toggle($scope.value);
		};
	}
})();
