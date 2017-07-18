window.addEventListener('load', function() {

  var revers = false;  // параметр для сортировки false-в алфавитном или true-в обратном порядке
  var sortFieldDefault = 'name.first';  // поле для сортировки по умолчанию


  var getRandomUsers = function() {       // функция запроса на сервер за пользователями
    $ajax({
      url: 'http://api.randomuser.me/?results=10',                         // запрос на сервер randomuser.me данных пользователей в кол-ве result=10
      responseType: 'json',                       //  передаваемые данные в json формате
      success: function(users) {
        localStorage.setItem('users', JSON.stringify(users.results));   // ложим в локалсторедж строку с полученными пользователями
        var users = JSON.parse(localStorage.getItem('users'));  // получили массив обьектов пользователей из локалсторедж

        viewsTableUsers(users);  // вызвали функцию отрисовки таблицы пользователей
      }
    });
  };


  getRandomUsers(); // запросили пользователей и отрисовали их на странице



  var viewsTableUsers = function(users) {  // функция отрисовки таблици пользователей
    var usersCount = users.length,
        userTableRow = '',
        i = 0;

    if (usersCount) {
      for (; i < usersCount; i++) {
        if (i == 0) { // на первой итерации цикла формирую строку с заголовками таблицы
          userTableRow += '<tr class="info" data-id="tableUsersHeaders"> <th data-id="userFirstName">Имя</th> <th data-id="userLastName">Фамилия</th> <th data-id="userPhone">Телефон</th> <th data-id="userEmail">E-mail</th> </tr>'
        }

        userTableRow += '<tr> <td data-id="userFirstName" value="userFirstName">' + users[i].name.first + '</td> <td data-id="userLastName" value="userLastName">' + users[i].name.last + '</td> <td data-id="userPhone" value="userPhone">' + users[i].phone + '</td> <td data-id="userEmail" value="userEmail">' + users[i].email + '</td></tr>'; // дописываю строки данных всех пользователей
      }
    }

    var tableNode = document.querySelector('[data-id="tableUsers"]');  // получаем ноду таблицы
    tableNode.innerHTML = userTableRow; // вписываем пользователей в таблицу

    var tableUsersHeadersNode = document.querySelector('[data-id="tableUsersHeaders"]');  // получаем ноду заголовков таблицы
    sortUsers(tableUsersHeadersNode);                                              // вешаем на заголовки таблицы обработчик событий (сортировку пользователей)

  };



  var sortUsers = function(tableUsersHeadersNode) {       // функция сортировки пользователей в алфавитном и обратном порядке по всем полям
    tableUsersHeadersNode.addEventListener('click', function(e) {

      var sortField = e.target.getAttribute('data-id'),        // ловим куда был клик и считываем значение из data-id для определения по какому полю сортировать
          users = JSON.parse(localStorage.getItem('users'));  // забрали массив обьектов пользователей из localStorage


      switch (sortField) {        // определяем и перезаписываем путь по каким ключам заходить к полю сортировки массива пользователей
        case 'userFirstName':
          sortField = 'name.first';
          break;
        case 'userLastName':
          sortField = 'name.last';
          break;
        case 'userPhone':
          sortField = 'phone';
          break;
        case 'userEmail':
          sortField = 'email';
          break;
      }



      if (sortField == sortFieldDefault) {  // определяем в каком порядке сортировать пользователей по выбранному полю

          if (revers == false) {
            users.sort(asc(sortField));  // формирую отсортированный массив пользователей  в алфавитном порядке
            revers = !revers;
            viewsTableUsers(users); // отрисовали отсортированных пользователей

          } else {
            users.sort(desc(sortField));  // формирую отсортированный массив пользователей  в обратном алфавитному порядке
            revers = !revers;
            viewsTableUsers(users); // отрисовали отсортированных пользователей
          }

      } else {
        users.sort(asc(sortField));  // формирую отсортированный массив пользователей  в алфавитном порядке
        sortFieldDefault = sortField;
        revers = true;
        viewsTableUsers(users); // отрисовали отсортированных пользователей
      }



      function asc(sortField) { // функция для сортировки в алфавитном порядке
        return function (a, b) {
          return deepFind(a, sortField) > deepFind(b, sortField);
        }
       };


      function desc(sortField) { // функция для сортировки в обратном алфавитном порядке
        return function (a, b) {
          return deepFind(a, sortField) < deepFind(b, sortField);
        }
       };


     function deepFind(obj, path) {   // функция достает данные из обьекта по вложенным ключами типа: obj.key1.key2.keyN
       var paths = path.split('.'),
           current = obj,
           i;

       for (i = 0; i < paths.length; ++i) {
        if (current[paths[i]] == undefined) {
          return undefined;
        } else {
          current = current[paths[i]];
        }
       }

       return current;
     };



      e.stopPropagation();
      return false;
    });
  }





  var refreshUsersNode = document.querySelector('[data-id="refreshUsers"]'); // Нода кнопки "другие участники тренингов"

  refreshUsersNode.addEventListener('click', function() {   // обработчик событий на кнопке "другие участники тренингов" - обновляем список участников
    localStorage.removeItem('users');  // удаляем из localStorage старый обьект пользователей

    getRandomUsers();  // запрашиваем на сервере новый обьект пользователе
  });



});
