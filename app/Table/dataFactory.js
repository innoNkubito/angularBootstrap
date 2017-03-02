angular.module("tableModule").factory("dataFactory", function($http,$q){
   
   var factory = {};

   factory.navData = ["Home", "Contact", "Services", "Visit" ];

	factory.getdata = function(){
		var deferred = $q.defer();

		$http({
			method: 'GET',
			url: '/Table/myDB.json'
		}).success(function(response){
			//factory.protekData = response.data;
			deferred.resolve(response);

		}).error(function(error){

			deferred.reject(error);
		});

		return deferred.promise;
	}

	


	return factory;


});