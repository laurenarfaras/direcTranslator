var app = angular.module('myApp',[]);

app.controller('mainController',['$scope', '$http', function($scope, $http){

  $scope.messages = [];

  $scope.send = function() {
    $scope.messages.push($scope.message);
    $scope.message = '';
  }

  $scope.translate = function() {
    console.log('translating');
    console.log('input = ' + $scope.input);
    console.log('output = ' + $scope.output);
    var tar = 'en';
    var src = 'en';
    switch($scope.output){
      case 'English':
        tar = 'en';
        break;
      case 'Spanish':
        tar = 'es';
        break;
      default:
        tar = 'en';
        break;
    }
    switch($scope.input){
      case 'English':
        src = 'en';
        break;
      case 'Spanish':
        src = 'es';
        break;
      default:
        src = 'en';
        break;
    }
    $http.post(`https://translation.googleapis.com/language/translate/v2?q=${$scope.message}&target=${tar}&source=${src}&key=AIzaSyArCyLfgKWuKNVzm1b7FSZUjjAHDMySTXE`)
        .then(function(response) {
          console.log(response.data.data.translations[0].translatedText);
          $scope.messages.push(response.data.data.translations[0].translatedText);
        })
    // $scope.send();
  }

  $scope.clear = function() {
    console.log('clearing');
    $scope.messages = [];
    $scope.message = '';
    $scope.input = '';
    $scope.output = '';
  }

}]);
