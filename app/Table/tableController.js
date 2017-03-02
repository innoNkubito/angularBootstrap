angular.module("tableModule").controller("tableController",function($scope,tableService, $http, $timeout, 
	$location, $rootScope, dataFactory){

	$scope.newBranch = {};
    
    var getdata = function (){
    	dataFactory.getdata().then(function(response){
    		$scope.protekBranches = response.protekBranchez;
    	},function(error){
    		console.log("Error: "+error);
    	});
    }
    getdata();
    /*
	$timeout(function() {
		alert("hello");
	}, 3000); */


	//$rootScope.x = 10;


	//Method 1 HTTP 
	/*$http.get('/Table/myDb.json').then(function(response){
			$scope.protekBranches = response.data.protekBranchez;
	}); */

	//Method 2
	/*$http({
		method : 'GET',
		url : '/Table/myDB.json'
	}).success(function(response){
		$scope.protekBranches = response.protekBranchez;
	}).error(function(error){
		console.log("Error: "+error);
	});*/


	$scope.removeBranch = function(index){
		$scope.protekBranches.splice(index,1);
	}

	$scope.addBranch = function(){
		$scope.protekBranches.push($scope.newBranch);
		$scope.newBranch= {};
	}


})