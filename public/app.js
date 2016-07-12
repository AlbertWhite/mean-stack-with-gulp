var application = angular.module("application",[]);

application.controller('basicController', function($scope, $http) {

    $http.get('/api/numbers')
        .success(function(data) {
			$scope.numbers = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });


});
