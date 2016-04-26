define(function() {
  var routes = {};
  var $templateCache = {};
  var appNode;

  var locationChange = function() {
    var url = location.hash.split('/');
    var currentPage = url[1] || 'main';

    var page = routes[currentPage];

    if (routes[currentPage] && routes[currentPage].controller) {
      routes[currentPage].controller();
    }

    if (routes[currentPage] && routes[currentPage].title) {
      document.title = routes[currentPage].title;
    }

    if (page.template || $templateCache[page.templateUrl]) {
      appNode.innerHTML = page.template || $templateCache[page.templateUrl];
    } else if (page.templateUrl) {
      $ajax({
        url: page.templateUrl,
        success: function(template) {
          appNode.innerHTML = template;
          $templateCache[page.templateUrl] = template;
        },
        error: function() {
          location.hash = '#/404';
        }
      });
    }
  };

  window.addEventListener('hashchange', locationChange);
  window.addEventListener('load', locationChange);

  return {
    addRoute: function(route) {
      routes[route.name] = route;
    },
    config: function(config) {
      appNode = config.appNode;
    }
  };
});
