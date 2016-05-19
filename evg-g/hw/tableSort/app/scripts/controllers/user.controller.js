'use strict';

angular.module('usersList')
  .controller('UserController', function($scope, $routeParams, $filter, usersService) {   // создали контроллер UserController в приложении usersList; routeParams - сервис энгулара который вытягивает данные с хэша
    $scope.user = usersService.getUserById($routeParams.id);

    var sortId;

    if ($scope.user.todoList && $scope.user.todoList.length) {
      var sortedTodoList = $filter('orderBy')($scope.user.todoList, 'sortId', true);
      sortId = sortedTodoList[0].sortId + 1;
    } else {
      sortId = 1;
    }


    if (!$scope.user.todoList) {
      $scope.user.todoList = [];
    }

    // [ { id: 1, task: 'hard work', status: [], priority: true|false, sortId: 1}]

    $scope.addTask = function() {
      $scope.user.todoList.push({
        id: (Math.random().toString(16) + '000000000').substr(2.16),
        task: $scope.newTask,
        status: 'new',
        priority: false,
        sortId: sortId++
      });

      $scope.newTask = '';

      $scope.changed = true;      // если есть изменения задач для пользователя, показываем кнопку сэйв
    };

    $scope.removeTask = function(todoItem) {         // удаление задачи пользователя
      $scope.user.todoList;

      angular.forEach($scope.user.todoList, function(item, key) {
        if (todoItem.id === item.id) {
          $scope.user.todoList.splice(key, 1);
        }
      });

      $scope.changed = true;      // если есть изменения задач для пользователя, показываем кнопку сэйв
  };

    $scope.saveUser = function() {
      usersService.saveUser($scope.user);
      $scope.changed = false;     // сохраняем изменения задач для пользователя, скрываем кнопку сэйв
    };

    $scope.up = function($index) {               // переместить задачу вверх по списку
      if ($index > 0) {
        var temp = $scope.user.todoList[$index - 1];
        $scope.user.todoList[$index - 1] = $scope.user.todoList[$index];
        $scope.user.todoList[$index] = temp;
      } else {
        alert('Куда еще выше?')
      }
    };

    $scope.down = function($index) {              // переместить задачу вниз по списку
      if ($index + 1 < $scope.user.todoList.length) {
        var temp = $scope.user.todoList[$index + 1];
        $scope.user.todoList[$index + 1] = $scope.user.todoList[$index];
        $scope.user.todoList[$index] = temp;
      } else {
        alert('Куда еще ниже?')
      }
    };

    $scope.edited = function(todoItem) {
      todoItem.isEditing = false;
      $scope.changed = true;
    };

  });
