'use strict';

angular.module('usersList')
  .service('usersService', function($http, $q) {      // сщздали сервис usersService в приложении usersList ($q промисы на обещание что то вернуть)



    return {
      getUsers: function(options) {
        var deferred = $q.defer();    // создали промис для выполнения

        var localUsers = (options && options.forceRefresh) ? null : localStorage.getItem('users');

        if (localUsers) {
          deferred.resolve(JSON.parse(localUsers));

        } else {
          $http.get('http://api.randomuser.me/?results=15')   // запрос на сервер за данными
            .success(function (users) {
              localStorage.setItem('users', JSON.stringify(users.results));   // ложим в локалсторедж строку с полученными пользователями
              deferred.resolve(users.results);            //  полученные данные передаем на выполнение в функции then в файйле main.controller.js
            });
        }


        return deferred.promise;        //
      }
    };
  })
