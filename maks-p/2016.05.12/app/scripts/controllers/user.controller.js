'use strict';

angular.module('usersList').controller('UserController', function($scope, $routeParams, usersService) {
  $scope.user = usersService.getUserById($routeParams.id);

  if (!$scope.user.todoList) {
    $scope.user.todoList = [];
  }

  $scope.addTask = function() {
    $scope.user.todoList.push({
      id: 1,
      task: $scope.newTask,
      status: 'new',
      priority: false,
      sortId: 1
    });

    $scope.newTask = '';
  };

  // [ { id: 1, task: 'hard work', status: [], priority: true|false, sortId: 1 } ]
});
