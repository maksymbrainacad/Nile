'use strict';

angular.module('usersList')
  .service('usersService', function($http, $q, $filter) {


    return {
      getUsers: function(options) {
        var deferred = $q.defer();

        var localUsers = (options && options.forceRefresh)
                          ? null
                          : localStorage.getItem('users');

        if (localUsers) {
          deferred.resolve(JSON.parse(localUsers));
        } else {
          $http.get('http://api.randomuser.me/?results=15')
            .success(function(users) {
              localStorage.setItem('users', JSON.stringify(users.results));

              deferred.resolve(users.results);
            });
        }

        return deferred.promise;
      },
      saveUsers: function(users) {
        var deferred = $q.defer();

        localStorage.setItem('users', JSON.stringify(users));
        deferred.resolve();

        return deferred.promise;
      },
      getUserById: function(id) {
        var users = JSON.parse(localStorage.getItem('users'));

        return $filter('filter')(users, {dob: id})[0];
      }
    };
  });
