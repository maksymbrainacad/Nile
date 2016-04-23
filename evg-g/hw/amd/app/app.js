define(['app/router','app/users/users'], function(router, users) {                // define обьявляет модуль
  router.addRoute({             // вызываем необходимые для нашей страницы /users на которой находится пользователь необходимые скрипты
    name: 'users',
    title: 'User Page',
    url: '/users',
    controller: users
  });


  router.addRoute({             // вызываем необходимые для нашей страницы /main на которой находится пользователь необходимые скрипты
    name: 'main',
    title: 'Main Page',
    url: '/main',
    controller: function() {
      console.log('Main page');
    }
  });


  return {
    run: function() {

      console.log('App runned');
    }
  }
});
