var app = angular.module('myApp',[]);

app.controller('mainController',['$scope',function($scope){

  $scope.messages = []

  $scope.send = function(){

    // socket.emit('chat message', $scope.message);
    // $scope.inputText="";

    console.log('sending: ' + $scope.message);
    $scope.messages.push($scope.message);
    console.log('messages: ' + $scope.messages);
    $scope.message = '';
  }

}]);
