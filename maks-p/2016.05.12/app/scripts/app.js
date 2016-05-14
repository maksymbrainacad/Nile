'use strict';

angular.module('usersList', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'MainController',
        templateUrl: '/app/views/main.html'
      })
      .when('/users/:id', {
        controller: 'UserController',
        templateUrl: '/app/views/user.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
