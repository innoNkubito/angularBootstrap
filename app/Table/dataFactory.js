angular.module("tableModule").factory("dataFactory", function(){
   
   var factory = {};


	factory.protekData= $http.get("/Table/myDB.json").then(function(response){
		 return response.data;
	});

	factory.navData = ["Home", "Contact", "Services", "Visit" ];


	return factory;


});