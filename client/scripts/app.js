var myApp = angular.module('myApp', []);

myApp.controller("WelcomeController", ['$scope', '$http', function($scope, $http) {
    $scope.heading = "Here is your message: ";

    $scope.getData = function() {
      $http.get('/data').then(function(data) {
        console.log(data);
      });
    };

    $scope.updateMessage = function(data) {
        console.log(data);
        $http.post('/data', data).then($scope.getData())
    };
}]);