(function () {
	'use strict';

	angular.module('app')
		.service('StartService', [StartService]);

	function StartService() {
		this.toggle = function(value) {
			return !value;
		};

		return this;
	}
})();
