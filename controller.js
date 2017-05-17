var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $http) {


	console.log("Hello world from controller");

	// $scope.contactlist = contactlist;


    $http.get('/contactlist')
    .then(function(response) {
        console.log("I got the data I requested");
        $scope.contactlist = response.data;
    });

	// .then(function(response) {
		// $scope.myWelcome = response.data;
	// });
});