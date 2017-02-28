angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
  $scope.missingPhoto = "img/missing.png";


})


.controller('BarcodeCtrl', function($scope, $cordovaBarcodeScanner) {

  $scope.barcodeState = false;

  $scope.barcodeScan = function(){
    $cordovaBarcodeScanner
    .scan()
    .then(function(barcodeData) {
      $scope.barcodeContent = barcodeData;
      $scope.barcodeState = true;
    }, function(error) {
      // Error
    });
  }
})



.controller('herbaryumCtrl', function($scope,$rootScope,$http) {
  $http.get($scope.webServiceUrl+"json_herbaryum.php")
  .then(function(response){
    $rootScope.herbaryums = response.data;
  });
}); 
