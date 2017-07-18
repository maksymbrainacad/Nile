angular.module('testApp').controller('phonesController', function($scope, phonesService) {    // для приложения testApp, создали контроллер phonesController
                                                                              // $scope - область видимости контроллера
  $scope.name = 'test app';
  $scope.query = '';
  $scope.maxPrice = 100;
  $scope.orderProp = 'name'; // параметр сортировки, по умолчанию по имени


  $scope.reversSort = false; // false - в алфавитном порядке, true - в противоположном алфавитному порядку




  $scope.phones = [];

  phonesService.get().then(function(phones) {  // then после запроса на сервер, выполни (function(принимает параметр, то что вернулось из services.js))
    $scope.phones = phones;
  });


  $scope.sort = function() {                     // описываем функцию сортировки, задаем свои условия сортировки по названию
    $scope.reversSort = !$scope.reversSort;
  };

  $scope.order = function(orderProp) {         // определяем по чем сортировать
    $scope.orderProp = orderProp;
  };


});
