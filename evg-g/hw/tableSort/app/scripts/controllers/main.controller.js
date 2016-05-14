'use strict';

angular.module('usersList')
  .controller('MainController', function($scope, usersService) {   // создали контроллер MainController в приложении usersList
    usersService.getUsers().then(function(users) {
      $scope.users = users;
    });

    $scope.orderProp = 'name.last';
    $scope.revers = false;


    $scope.query = '';

    $scope.searchFunction = function(user) {     // функция поиска-сортировки по юзерам
      var query = $scope.query.toLowerCase();

      if (user.name.last.toLowerCase().indexOf(query) !== -1 || user.name.first.toLowerCase().indexOf(query) !== -1 || user.phone.toLowerCase().indexOf(query) !== -1) {
        return true;
      }

      return false;
    }



    $scope.refresh = function() {         // функция обновления пользователей
      usersService.getUsers({forceRefresh: true}).then(function(users) {  // forceRefresh создали опцию для обнуления локалстореджа и передали ее в файл users.service.js
        $scope.users = users;
      });
    };

    $scope.sort = function(sortProp) {      // функция сортировки пользователей по полям таблицы в алфавитном порядке
      if ($scope.orderProp === sortProp) {
        $scope.revers = !$scope.revers;
        return;
      }

      $scope.orderProp = sortProp;
      $scope.revers = false;
    };

  });
