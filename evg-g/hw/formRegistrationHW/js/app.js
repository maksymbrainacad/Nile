window.addEventListener('load', function() {
  $ajax({
    url: 'http://api.randomuser.me/?results=1',                         // запрос на сервер randomuser.me данных пользователей в кол-ве result=10
    dataType: 'json',                       //  передаваемые данные в json формате
    success: function(users) {
      users = JSON.parse(users);
      var usersEmail = users.results[0].login.username,
          usersPassword = users.results[0].login.password;


      document.querySelector('[data-id="users-email"]').innerHTML = usersEmail;

      document.querySelector('[data-id="users-password"]').innerHTML = usersPassword;


        var userAcsecc = JSON.parse(localStorage.getItem('userAcsecc'));


        localStorage.setItem('userAcsecc', JSON.stringify({   // добавляем нового пользователя в localStorage
          email: usersEmail,
          password: usersPassword
        }));

    },
    error: function() {
      console.log('error server reqest');
    }
  });



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
// ======================================================
    var userAcseccCheck = JSON.parse(localStorage.getItem('userAcseccCheck'));
    localStorage.setItem('userAcseccCheck', JSON.stringify({   // добавляем нового пользователя в localStorage
      email: email,
      password: password
    }));


    if (localStorage.getItem('userAcseccCheck') == localStorage.getItem('userAcsecc')) { //========================================
      localStorage.setItem('user', JSON.stringify({   // добавляем нового пользователя в localStorage
        email: email,
        password: password
      }));

      modalLoginForm.classList.remove('modals-overlay-active');

      location.reload();                                  //location глобальный обьект который хранит данные о местоположении пользователя, reload перезагрузка страници для обновления данных
    } else {
      localStorage.removeItem('userAcsecc');                  // удаляем пользователя из localStorage
      localStorage.removeItem('userAcseccCheck');                  // удаляем пользователя из localStorage
      console.log('no acsecc');
      location.reload();                                  //location глобальный обьект который хранит данные о местоположении пользователя, reload перезагрузка страници для обновления данных

    }
      e.preventDefault();
      return false;
  });

  logOutNode.querySelector('button').addEventListener('click', function() {
    localStorage.removeItem('user');                  // удаляем пользователя из localStorage
    location.reload();                                  //location глобальный обьект который хранит данные о местоположении пользователя, reload перезагрузка страници

  });

  logInNode.querySelector('button').addEventListener('click', function() {
    modalLoginForm.classList.add('modals-overlay-active');
  });
});
