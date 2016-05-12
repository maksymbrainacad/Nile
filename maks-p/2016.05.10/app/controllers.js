angular.module('testApp')
  .controller('phonesController', function($scope, phonesService) {
    $scope.name = 'test app';

    $scope.query = '';
    $scope.maxPrice = 50;

    $scope.reverse = false;
    $scope.orderProp = 'name';

    $scope.phones = [];

    phonesService.get().then(function(phones) {
      $scope.phones = phones;
    });

    $scope.sort = function() {
      $scope.reverse  = !$scope.reverse;
    };

    $scope.order = function(orderProp) {
      $scope.orderProp = orderProp;
    };
  });
