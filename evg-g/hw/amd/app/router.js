define(function() {
  var routes = {};

  var locationChange = function() {
    var url = location.hash.split('/');   //location глобальный обьект который хранит данные о местоположении пользователя
    var currentPage = url[1] || 'main';

    if (routes[currentPage] && routes[currentPage].controller) {  // навесили обработчики на страницу
      routes[currentPage].controller();
    }
  };


  window.addEventListener('hashchange', locationChange);  // обработчик на урл все что после #
  window.addEventListener('load', locationChange);  // после загрузки страницы вызываем функцию router


  return {
    addRoute: function(route) {
      routes[route.name] = route;
    }
  }
});
