'use strict';

angular.module('usersList').controller('UserController', function($scope, $routeParams, $filter, usersService) {
  $scope.user = usersService.getUserById($routeParams.id);

  var sortId;

  if ($scope.user.todoList && $scope.user.todoList.length) {
    var sortedTodoList = $filter('orderBy')($scope.user.todoList, 'sortId', true);
    console.log(sortedTodoList);
    sortId = sortedTodoList[0].sortId + 1;
  } else {
    sortId = 1;
  }

  if (!$scope.user.todoList) {
    $scope.user.todoList = [];
  }

  $scope.addTask = function() {
    $scope.user.todoList.push({
      id: (Math.random().toString(16) + '000000000').substr(2, 16),
      task: $scope.newTask,
      status: 'new',
      priority: false,
      sortId: sortId++
    });

    $scope.newTask = '';

    $scope.changed = true;
  };

  $scope.saveUser = function() {
    usersService.saveUser($scope.user);
    $scope.changed = false;
  }

  $scope.removeTask = function(todoItem) {
    angular.forEach($scope.user.todoList, function(item, key) {
      if (todoItem.id === item.id) {
        $scope.user.todoList.splice(key, 1);
      }
    });

    $scope.changed = true;
  };

  $scope.up = function($index) {
    if ($index > 0) {
      var temp = $scope.user.todoList[$index - 1];
      $scope.user.todoList[$index - 1] = $scope.user.todoList[$index];
      $scope.user.todoList[$index] = temp;
    }
  }

  $scope.down = function($index) {
    if ($index + 1 < $scope.user.todoList.length) {
      var temp = $scope.user.todoList[$index + 1];
      $scope.user.todoList[$index + 1] = $scope.user.todoList[$index];
      $scope.user.todoList[$index] = temp;
    }
  };

  $scope.edited = function(todoItem) {
    todoItem.isEditing = false;
    $scope.changed = true;
  };

  // [ { id: 1, task: 'hard work', status: [], priority: true|false, sortId: 1 } ]
});
