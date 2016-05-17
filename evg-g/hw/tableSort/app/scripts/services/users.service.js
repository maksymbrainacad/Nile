'use strict';

angular.module('usersList')
  .service('usersService', function($http, $q, $filter) {      // сoздали сервис usersService в приложении usersList ($q промисы на обещание что то вернуть)



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
              deferred.resolve(users.results);            // resolve - полученные данные передаем на выполнение в функции then в файйле main.controller.js
            });
        }


        return deferred.promise;        // вернули обещание от промиса
      },
      saveUsers: function(users) {
        var deferred = $q.defer();

        localStorage.setItem('users', JSON.stringify(users));   // перезаписали в локалсторедж строку с откорректированными пользователями
        deferred.resolve();            //  resolve - передаем на выполнение в функции then в файйле main.controller.js


        return deferred.promise;        // вернули обещание от промиса
      },
      getUserById: function(id) {                                // выводим юзера к предпросмотру
        var users = JSON.parse(localStorage.getItem('users'));

        return $filter('filter')(users, {dob: id})[0];
      },
      saveUser: function(user) {                    // сохранение задач для пользователя
        var users = JSON.parse(localStorage.getItem('users'));  // получаем из локалсторедж строку с пользователями

        angular.forEach(users, function(item, key) {    // ищем нужного пользователя в массиве всех пользователей, для сохранений ему изменений
          if (item.dob === user.dob) {
            users[key] = user;
          }
        });

        localStorage.setItem('users', JSON.stringify(users));   // ложим в локалсторедж строку с полученными пользователями

      }
    };
  });
