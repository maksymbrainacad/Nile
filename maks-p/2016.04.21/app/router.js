define(function() {
  var routes = {};
  var $templateCache = {};
  var appNode;
  var controllerData;


  var locationChange = function() {
    var url = location.hash.split('/');
    var currentPage = url[1] || 'main';

    var page = routes[currentPage];

    if (routes[currentPage] && routes[currentPage].controller) {
      controllerData = routes[currentPage].controller();
    }

    if (routes[currentPage] && routes[currentPage].title) {
      document.title = routes[currentPage].title;
    }

    var templateCompile = function(template) {
      var templateHandlebars = Handlebars.compile(template);
      appNode.innerHTML = templateHandlebars({
        name: 'Test',
        routes: routes,
        data: controllerData
      });
    }

    if (page.template || $templateCache[page.templateUrl]) {
      templateCompile(page.template || $templateCache[page.templateUrl]);
    } else if (page.templateUrl) {
      $ajax({
        url: page.templateUrl,
        success: function(template) {
          templateCompile(template);
          $templateCache[page.templateUrl] = template;
        },
        error: function() {
          location.hash = '#/404';
        }
      });
    } else {
      templateCompile('<h1>Template not found</h1>');
    }
  };

  window.addEventListener('hashchange', locationChange);

  return {
    addRoute: function(route) {
      routes[route.name] = route;
    },
    config: function(config) {
      appNode = config.appNode;
    },
    run: function() {
      locationChange();
    }
  };
});
