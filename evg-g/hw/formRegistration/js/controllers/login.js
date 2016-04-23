function Login(prevHash) {
  this.querySelector('[data-id="login-form"]').addEventListener('submit', function(e) {
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

    location.hash = prevHash;

    location.reload();                                  //location глобальный обьект который хранит данные о местоположении пользователя, reload перезагрузка страници для обновления данных

    e.preventDefault();
    return false;
  });
}
