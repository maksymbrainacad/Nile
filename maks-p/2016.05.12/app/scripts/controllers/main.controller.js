'use strict';

angular.module('usersList')
  .controller('MainController', function($scope, usersService) {
    usersService.getUsers().then(function(users) {
      $scope.users = users;
    });

    $scope.orderProp = 'name.last';
    $scope.reverse = false;

    $scope.query = '';
    $scope.queryBy = '';

    $scope.usersChanged = false;

    $scope.searchFunction = function(user) {
      var query = $scope.query.toLowerCase();

      var userNameLast = user.name.last.toLowerCase();
      var userNameFirst = user.name.first.toLowerCase();
      var userPhone = user.phone;

      if ( ($scope.queryBy === '' || $scope.queryBy === 'name.last') && userNameLast.indexOf(query) !== -1 ) {
        return true;
      }

      if (($scope.queryBy === '' || $scope.queryBy === 'name.first') && userNameFirst.indexOf(query) !== -1) {
        return true;
      }

      if (($scope.queryBy === '' || $scope.queryBy === 'phone') && userPhone.indexOf(query) !== -1) {
        return true;
      }

      return false;
    }

    $scope.refresh = function() {
      usersService.getUsers({
        forceRefresh: true
      }).then(function(users) {
        $scope.users = users;
      });
    };

    $scope.sort = function(sortProp) {
      if ($scope.orderProp === sortProp) {
        $scope.reverse = !$scope.reverse;
        return;
      }

      $scope.orderProp = sortProp;
      $scope.reverse = false;
    };

    $scope.remove = function(user) {
      if (confirm('Are you sure to delete user:' + user.name.first)) {
        $scope.users.splice($scope.users.indexOf(user), 1);
        $scope.usersChanged = true;
      }
    };

    $scope.saveUsers = function() {
      usersService.saveUsers($scope.users)
        .then(function() {
        console.log('Users saved');
      });
    };
  });
