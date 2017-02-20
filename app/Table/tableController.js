angular.module("tableModule").controller("tableController",function($scope,tableService, $http, dataFactory){

	$scope.newBranch = {};


	$http.get('/Table/myDb.json').then(function(response){
			$scope.protekBranches = response.data.protekBranchez;
	});


	$scope.removeBranch = function(index){
		$scope.protekBranches.splice(index,1);
	}

	$scope.addBranch = function(){
		$scope.protekBranches.push($scope.newBranch);
		$scope.newBranch= {};
	}


})