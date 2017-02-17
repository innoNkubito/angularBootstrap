angular.module("tableModule").controller("tableController",function($scope,tableService,dataFactory){

	$scope.newBranch = {};


	tableService.protekData().success(function(response){

		$scope.protekBranches = response.data;

	});


	$scope.removeBranch = function(index){
		$scope.protekBranches.splice(index,1);
	}

	$scope.addBranch = function(){
		$scope.protekBranches.push($scope.newBranch);
		$scope.newBranch= {};
	}


})