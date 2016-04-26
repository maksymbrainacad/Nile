define(function() {
  var routes = {},
      $templateCache = {},
      appNode,
      controllerData;

  var locationChange = function() {
    var url = location.hash.split('/');   //location глобальный обьект который хранит данные о местоположении пользователя
    var currentPage = url[1] || 'main';   // получили адресс страницы на которой мы находимся

    var page = routes[currentPage];

    if (routes[currentPage] && routes[currentPage].controller) {  // навесили обработчики на страницу
      controllerData = routes[currentPage].controller();
    }

    if (routes[currentPage] && routes[currentPage].title) {
      document.title = routes[currentPage].title;
    }

    var templateCompile = function(template) {                  // отрисовывает страницу по пришедшему в переменную шаблону
      var templateHandlebars = Handlebars.compile(template);
      appNode.innerHTML = templateHandlebars({
        name: 'Test',
        routes: routes,                                        // отображаем на странице все наши Роуты, для наглядности
        data: controllerData
      });
    }

    if (page.template || $templateCache[page.templateUrl]) {                   // проверяем есть ли  template у нашей page или шаблон в кэше
      templateCompile(page.template || $templateCache[page.templateUrl]);
    } else if (page.templateUrl) {                //  в противном случае подкидываем внешнюю страницу формируя ajax запрос
      $ajax({
        url: page.templateUrl,
        success: function(template) {
          templateCompile(template);
          $templateCache[page.templateUrl] = template;  // записали наш шаблон в переменную $templateCache
        },
        error: function() {
          location.hash = '#/404';
        }
      });
    } else {
      templateCompile('<h1>Template not found</h1>');
    }

  };


  window.addEventListener('hashchange', locationChange);  // обработчик на урл все что после #


  return {
    addRoute: function(route) {
      routes[route.name] = route;
    },
    config:  function(config) {                   // ловим из app.js ноду дива в который будем подкидывать разный контент
      appNode = config.appNode;
    },
    run: function() {
      locationChange();
    }
  };
});
