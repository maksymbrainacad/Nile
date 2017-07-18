'use strict';

angular.module('usersList')
  .filter('startFrom', function() {   // создали фильтр startFrom в приложении usersList;
    return function(users, start) {
      start = +start;
      return users.slice(start);
    };
  });
