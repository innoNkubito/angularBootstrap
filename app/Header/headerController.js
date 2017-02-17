angular.module("headerModule").controller("headerController", function($scope,tableService,dataFactory){

	$scope.navlinks = dataFactory.navData;
})