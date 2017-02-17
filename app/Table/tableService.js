angular.module("tableModule").service("tableService", ['$http',function($http){

	this.navData = ["Home", "Contact", "Services", "Visit" ];

	this.protekData = function(){
		return $http.get('/Table/myDB.json');
	}


}]);