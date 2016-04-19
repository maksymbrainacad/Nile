function router() {
  var url = location.hash.split('/');
  var currentPage = url[1] || 'main';
  var contentNode = document.querySelector('[data-id="content"]');

  var pages = {
    main: {
      title: 'Main page',
      view: '<h1>Welcome</h1>'
    },
    about: {
      authorization: true,
      title: 'About page',
      view: '<h1>About</h1>', // 'views/about.html'
      controller: function() {
        this.querySelector('h1')
            .addEventListener('click', function() {
              console.log('about controller');
            });
      }
    },
    '404': {
      title: 'Not Found',
      view: '<h1>404 - Not Found</h1>'
    },
    login: {
      title: 'Login',
      viewUrl: '/templates/login.html'
    }
  };

  var page = pages[currentPage] || pages['404'];

  if (page.authorization) {
    var user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
      location.hash = '#/login';
      return;
    }
  }

  if (page.view) {
    contentNode.innerHTML = page.view;
  } else if (page.viewUrl) {
    $ajax({
      url: page.viewUrl,
      success: function(template) {
        contentNode.innerHTML = template;
      },
      error: function() {
        location.hash = '#/404';
      }
    });
  }

  if (page.controller) {
    page.controller.call(contentNode);
  }

  if (page.title) {
    document.title = page.title;
  }
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
