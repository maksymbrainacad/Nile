define(['app/router','app/users/users'], function(router, users) {                // define обьявляет модуль
  var mainNode = document.querySelector('[app="amdApp"]'); // ловим ноду дива в который будем подкидывать разный контент

  router.addRoute({             // вызываем необходимые для нашей страницы /users на которой находится пользователь необходимые скрипты
    name: 'users',
    title: 'User Page',
    url: '/users',
    controller: users,
    templateUrl: '/app/users/users.html'     // подкидываем данные на страницу по внешнему шаблону
  });


  router.addRoute({             // вызываем необходимые для нашей страницы /main на которой находится пользователь необходимые скрипты
    name: 'main',
    title: 'Main Page',
    url: '/main',
    controller: function() {
      console.log('Main page');
    },
    template: '<h1>Main Page</h1>'
  });


  router.config({       // передаем в router.js ноду дива в который будем подкидывать разный контент
    appNode:mainNode
  });

  return {
    run: function() {
      console.log('App runned');
      router.run();     // после загрузки страницы вызываем функцию router
    }
  }
});
