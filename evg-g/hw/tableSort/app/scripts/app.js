'use strict';

angular.module('usersList', ['ngRoute'])   // создали angular приложение testApp, второй параметр принимает массив зависимостей
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {               // когда пользователь находиться на первой странице, подгрузить для нее шаблон вью и навесить контроллеры
        controller: 'MainController',
        templateUrl: '/app/views/main.html'
      })
      .otherwise({             // в противном случае
        redirectTo: '/'         // redirectTo - перенаправить пользователя на страницу '/'
      });
});
