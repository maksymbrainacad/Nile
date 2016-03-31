window.addEventListener('load', function() {
  var modalBtns = document.querySelectorAll('[data-modal]'),
      modalsOverlayNode = document.getElementsByClassName('modals-overlay')[0]; // [0] берем первый элемент из коллекции нод

  var onModalBtnClick = function(e) {
    var btnNode = e.target,
        modalId = btnNode.getAttribute('data-modal');

    if (modalId) {
      var modalNode = modalsOverlayNode.querySelector('[data-modal-id ="' + modalId + '"]');

      if (modalNode) {
        modalNode.setAttribute('data-opened', 'true');       // вписываем доп атрибут для модального окна,
                                                            // для дальнейшего поиска открытых окон
        modalsOverlayNode.style.display = 'block';
        modalNode.style.display = 'block';
      } else {
        var modalUrl = btnNode.getAttribute('data-modal-url');  //получили в переменную шаблон модального окна

        if (modalUrl) {
          var req = new XMLHttpRequest();                   // в переменную положили команду создающую новый запрос на сервер

          req.open('GET', modalUrl, true);      // open - открыть новое соединение и сформируем ГЕТ запрос на сервер,
                                                          // третий параметр true - асинхронная загрузка, false - синхронная загрузка (бок)

          req.onreadystatechange = function (aEvt) {      // обработка запроса на ошибки после выполнения
            if (req.readyState === 4) {                   // readyState статус готовности к приемке запроса
              if (req.status === 200) {                   // status статус ответа от сервера
                console.log(req.responseText);
              } else {
                console.error(req, aEvt);                //если запрос не выполниться, показываем ошибку
              }
            }
          };

          req.send(null);                            // и отправить этот запрос на сервер (null - для ГЕТ запросов)
        }
      }
    }
  };

  Array.prototype.forEach.call(modalBtns, function(modalBtn) {   //запускаем метод forEach для коллекции нод modalBtns как будто для массива
    modalBtn.addEventListener('click', onModalBtnClick);
  })

  modalsOverlayNode.addEventListener('click', function(e) {
    var action = e.target.getAttribute('data-action'),
        openedModalNode = modalsOverlayNode.querySelector('[data-opened="true"]');

    if (action && action === 'close' || e.target == e.currentTarget) {
      modalsOverlayNode.style.display = '';
      openedModalNode.style.display = '';
      openedModalNode.removeAttribute('data-opened');     // удаляем все атрибуты data-opened чтоб закрыть все открытые модальные окна
    }
  });
});
