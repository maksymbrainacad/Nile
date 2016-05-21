'use strict';

angular.module('usersList')
  .filter('startFrom', function() {
    return function(users, start) {
      start = +start;
      return users.slice(start);
    };
  });
