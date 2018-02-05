var app = angular.module('myApp',[]);

app.controller('mainController',['$scope',function($scope){

  $scope.messages = [];

  $scope.send = function() {
    $scope.messages.push($scope.message);
    $scope.message = '';
  }

  $scope.translate = function() {
    console.log('translating');
    console.log('input = ' + $scope.input);
    console.log('output = ' + $scope.output);
    $scope.send();
  }

  $scope.clear = function() {
    console.log('clearing');
    $scope.messages = [];
    $scope.message = '';
    $scope.input = '';
    $scope.output = '';
  }

}]);
