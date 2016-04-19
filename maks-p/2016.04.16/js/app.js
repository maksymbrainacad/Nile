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
    }
  };

  var page = pages[currentPage];

  contentNode.innerHTML = page.view;

  if (page.controller) {
    page.controller.call(contentNode);
  }

  if (page.title) {
    document.title = page.title;
  }
}

window.addEventListener('hashchange', router);

window.addEventListener('load', function() {
  var modalLoginForm = document.querySelector('[data-id="modal-login-form"]'),
    loginFormNode = document.querySelector('[data-id="login-form"]'),
    logInNode = document.querySelector('.log-in'),
    logOutNode = document.querySelector('.log-out'),
    user = JSON.parse(localStorage.getItem('user'));

  /* Start: Init */
  if (user) {
    logOutNode.querySelector('[data-id="user-email"]').innerHTML = user.email;

    logOutNode.style.display = 'block';
  } else {
    logInNode.style.display = 'block';
    //modalLoginForm.classList.add('modal-overlay-active');
  }
  /* End: Init */

  loginFormNode.addEventListener('submit', function(e) {
    var email = e.target.email.value;
    var password = e.target.password.value;

    localStorage.setItem('user', JSON.stringify({
      email: email,
      password: password
    }));

    modalLoginForm.classList.remove('modal-overlay-active');

    location.reload();

    e.preventDefault();
    return false;
  });

  logOutNode.querySelector('button').addEventListener('click', function() {
    localStorage.removeItem('user');
    location.reload();
  });

  logInNode.querySelector('button').addEventListener('click', function() {
    modalLoginForm.classList.add('modal-overlay-active');
  });

  router();
});
