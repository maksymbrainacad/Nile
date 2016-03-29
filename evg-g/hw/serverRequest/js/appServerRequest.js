window.addEventListener('load', function() {
  var appNode = document.querySelector('[data-app-name="ajax"]'),
      button = document.querySelector('[data-id="lunch-button"]');

      button.addEventListener('click', function() {
      /*
        var req = new XMLHttpRequest();                   // в переменную положили команду создающую новый запрос на сервер

        req.open('GET', '/server/user.json', true);      // open - открыть новое соединение и сформируем ГЕТ запрос на сервер,
                                                        // третий параметр true - асинхронная загрузка, false - синхронная загрузка (бок)

        req.onreadystatechange = function (aEvt) {      // обработка запроса на ошибки после выполнения
          if (req.readyState === 4) {                   // readyState статус готовности к приемке запроса
            if (req.status === 200) {                   // status статус ответа от сервера
              try {
                var user = JSON.parse(req.responseText); // парсим в песочнице полученный ответ от сервера
              } catch (e) {
                  console.error(e);
              }

              if (user) {
                var headerTemplate = document.getElementById('header');

                var headerHtml = headerTemplate.innerHTML.replace(/\{\{id\}\}/i,user.id).replace(/\{\{name\}\}/i,user.name);
                appNode.innerHTML = headerHtml;
              }
            } else {
              console.log(req, aEvt);
            }
          }
        };

        req.send(null);                            // и отправить этот запрос на сервер
      */

      $.when(                                           // формирование запросов при помощи библиотеки ajax
        $.ajax('/server/user.json'),
        $.ajax('/templates/header.template.html')
      ).then(function(user, headerTempl) {
        if (user) {
          var headerHtml = headerTempl[0].replace(/\{\{id\}\}/i,user[0].id).replace(/\{\{name\}\}/i,user[0].name);

          appNode.innerHTML = headerHtml;
        }
      });
    });
});
