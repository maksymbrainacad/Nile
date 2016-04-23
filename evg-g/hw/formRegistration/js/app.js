window.addEventListener('load', function() {
  var modalLoginForm = document.querySelector('[data-id="modal-login-form"]'),
      loginFormNode = document.querySelector('[data-id="login-form"]'),
      logInNode = document.querySelector('.log-in'),
      logOutNode = document.querySelector('.log-out'),

      // user = JSON.parse(localStorage.getItem('user'));

      user = JSON.parse(getCookie('user') || null);

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

    // localStorage.setItem('user', JSON.stringify({   // добавляем нового пользователя в localStorage
    //   email: email,
    //   password: password
    // }));

    setCookie('user', JSON.stringify({   // добавляем нового пользователя в Cookie
      email: email,
      password: password
    }));


    modalLoginForm.classList.remove('modals-overlay-active');

    location.reload();                                  //location глобальный обьект который хранит данные о местоположении пользователя, reload перезагрузка страници для обновления данных

    e.preventDefault();
    return false;
  });

  logOutNode.querySelector('button').addEventListener('click', function() {
    // localStorage.removeItem('user');                  // удаляем пользователя из localStorage
    deleteCookie('user');
    location.reload();                                  //location глобальный обьект который хранит данные о местоположении пользователя, reload перезагрузка страници

  });

  logInNode.querySelector('button').addEventListener('click', function() {
    modalLoginForm.classList.add('modals-overlay-active');
  });
});
