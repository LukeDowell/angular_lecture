var myApp = angular.module('myApp', []);

myApp.controller("WelcomeController", ['$scope', '$http', function($scope, $http) {
    $scope.heading = "Here is your message: ";
    $scope.updateMessage = function() {
        $scope.message = "Hello " + $scope.name + " !!!!";
    };
}]);