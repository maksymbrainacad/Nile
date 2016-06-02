window.addEventListener('load', function() {

  var getRandomUsers = function() {       // функция запроса на сервер за пользователями и отрисовка их в таблице
    $ajax({
      url: 'http://api.randomuser.me/?results=10',                         // запрос на сервер randomuser.me данных пользователей в кол-ве result=10
      responseType: 'json',                       //  передаваемые данные в json формате
      success: function(users) {
        localStorage.setItem('users', JSON.stringify(users.results));   // ложим в локалсторедж строку с полученными пользователями
        var users = JSON.parse(localStorage.getItem('users'));
        var usersCount = users.length,
            userTableRow = '',
            i = 0;

        if (usersCount) {
          for (; i < usersCount; i++) {
            if (i == 0) {
              userTableRow += '<tr class="info" data-id="tableUsersHeaders"> <th data-id="userFirstName">Имя</th> <th data-id="userLastName">Фамилия</th> <th data-id="userPhone">Телефон</th> <th data-id="userEmail">E-mail</th> </tr>'
            }

            userTableRow += '<tr> <td data-id="userFirstName" value="userFirstName">' + users[i].name.first + '</td> <td data-id="userLastName" value="userLastName">' + users[i].name.last + '</td> <td data-id="userPhone" value="userPhone">' + users[i].phone + '</td> <td data-id="userEmail" value="userEmail">' + users[i].email + '</td></tr>';
          }
        }

        var tableNode = document.querySelector('[data-id="tableUsers"]');  // получаем ноду таблицы
        tableNode.innerHTML = userTableRow; // вписываем пользователей в таблицу

        var tableUsersHeadersNode = document.querySelector('[data-id="tableUsersHeaders"]');  // получаем ноду заголовков таблицы
        sortUsers(tableUsersHeadersNode);                                              // вешаем на заголовки таблицы обработчик событий (сортировку пользователей)
      }
    });
  };



  getRandomUsers(); // запросили пользователей и отрисовали их на странице



  var revers = false;

  var sortUsers = function(tableUsersHeadersNode) {       // функция сортировки пользователей в алфавитном и обратном порядке по всем полям
    tableUsersHeadersNode.addEventListener('click', function(e) {

      var sortField = e.target.getAttribute('data-id'),
          users = JSON.parse(localStorage.getItem('users'));

      console.log(users);

      switch (sortField) {
        case 'userFirstName':
          sortField = '.name.first';
          break;
        case 'userLastName':
          sortField = '.name.last';
          break;
        case 'userPhone':
          sortField = '.phone';
          break;
        case 'userEmail':
          sortField = '.email';
          break;
      }


      console.log(sortField);




      var userSort = users.sort(asc(sortField));


     function asc(sortField) { // функция для сортировки в прямом порядке (по возрастанию)
       return function (x, y) {
         console.log(x);
         console.log(typeof(x));
         console.log(x[sortField]);
         console.log(y);
         return x[sortField] > y[sortField];
       }
      };

     function desc(sortField) { // функция для сортировки в обратном порядке (по убыванию)
       return function (x, y) {
         return x[sortField] < y[sortField];
       }
      };



      console.log(userSort);

      e.sortPropogation;
      return false;
    });

  }




  var refreshUsersNode = document.querySelector('[data-id="refreshUsers"]'); // Нода кнопки "другие участники тренингов"
  
  refreshUsersNode.addEventListener('click', function() {   // обработчик событий на кнопке "другие участники тренингов" - обновляем список участников
    localStorage.removeItem('users');  // удаляем из localStorage старый обьект пользователей

    getRandomUsers();  // запрашиваем на сервере новый обьект пользователе
  });



});
