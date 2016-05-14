'use strict';

angular.module('usersList')
  .controller('MainController', function($scope, usersService) {   // создали контроллер MainController в приложении usersList
    usersService.getUsers().then(function(users) {
      $scope.users = users;
    });

    $scope.orderProp = 'name.last';
    $scope.revers = false;


    $scope.query = '';
    $scope.queryBy = '';

    $scope.usersChange = false;


    $scope.searchFunction = function(user) {     // функция поиска-сортировки по юзерам
      var query = $scope.query.toLowerCase();
      var userNameLast = user.name.last.toLowerCase();
      var userNameFirst = user.name.first.toLowerCase();
      var userNamePhone = user.phone.toLowerCase();

      if (($scope.queryBy === '' || $scope.queryBy === 'name.last') && userNameLast.indexOf(query) !== -1) {
        return true;
      }

      if (($scope.queryBy === '' || $scope.queryBy === 'name.first') && userNameFirst.indexOf(query) !== -1) {
        return true;
      }

      if (($scope.queryBy === '' || $scope.queryBy === 'phone') && userNamePhone.indexOf(query) !== -1) {
        return true;
      }

      return false;
    }



    $scope.saveUsers = function() {         // функция сохранения пользователей пользователей
      usersService.saveUsers($scope.users).then(function(users) {
        console.log('Us saved');
      });
    };

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

    $scope.remove = function(user) {      // функция удаления пользователей по полям таблицы в алфавитном порядке
      if (confirm('Вы действительно хотите удалить пользователя?' + user.name.first)) {
        $scope.users.splice($scope.users.indexOf(user), 1);
        $scope.usersChange = true;
      }
    };

  });
