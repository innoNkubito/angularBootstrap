angular.module("tableModule").controller("tableController",function($scope){


	$scope.protekBranches = [

	{state: "CA", city: "Fremont"},

	{state: "CA", city: "San Jose"},

	{state: "CA", city: "San Francisco"},

	{state: "CA", city: "Los Angeles"},

	{state: "IL", city: "Chicago"}

	];

	$scope.stat = '';
	$scope.cit = '';


	document.getElementById("add").addEventListener('click', function() {
    $scope.$apply(function() {
        $scope.stat = prompt("State");
        $scope.cit = prompt("City");

        if( $scope.stat !='' &&  $scope.city != '')
        {
        	 $scope.protekBranches.push({state: $scope.stat, city: $scope.cit});
        }
        else{
        	alert("Invalid input");
        }

       

    });

    
});

	$scope.removeBranch = function(index){
		$scope.protekBranches.splice(index,1);
	}


})