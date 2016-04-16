function router() {
  var url = location.hash.split('/');   //location глобальный обьект который хранит данные о местоположении пользователя
  var currentPage = url[1] || 'main';
  var contentNode = document.querySelector('[data-id="content"]');

  var pages = {                               //делаем новую хтмл страницу main
    main: { title: 'Main page',
            view: '<h1>Welcome</h1>',
    },
    about: {                                       //делаем новую хтмл страницу about
      title: 'About page',
      view: '<h1>About</h1>',
      controller: function() {                  // навешиваем обработчики на нашу новую хтмл
        this.querySelector('h1').addEventListener('click', function() {
          console.log('about controller');
        });
      }
    }
  };

  var page = pages[currentPage];

  contentNode.innerHTML = page.view;  // вписали нужную страницу в хтмл
  if (page.controller) {
    page.controller.call(contentNode);  // навесили на них обработчики
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

/* Начало инициализации пользователя */
  if (user) {
    logOutNode.querySelector('[data-id="user-email"]').innerHTML = user.email;

    logOutNode.style.display = 'block';
  } else {
    logInNode.style.display = 'block';
    // modalLoginForm.classList.add('modals-overlay-active');
  }
  /* Конец инициализации пользователя */



  loginFormNode.addEventListener('submit', function(e) {
    var email = e.target.email.value;
    var password = e.target.password.value;

    localStorage.setItem('user', JSON.stringify({
      email: email,
      password: password
    }));

    modalLoginForm.classList.remove('modals-overlay-active');

    location.reload();                                  //location глобальный обьект который хранит данные о местоположении пользователя, reload перезагрузка страници

    e.preventDefault();
    return false;
  });

  logOutNode.querySelector('button').addEventListener('click', function() {
    localStorage.removeItem('user');
    location.reload();                                  //location глобальный обьект который хранит данные о местоположении пользователя, reload перезагрузка страници

  });

  logInNode.querySelector('button').addEventListener('click', function() {
    modalLoginForm.classList.add('modals-overlay-active');
  });

  router();
});
