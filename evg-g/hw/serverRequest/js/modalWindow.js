window.addEventListener('load', function() {
  var modalBtns = document.querySelectorAll('[data-modal]'),
      modalsOverlayNode = document.getElementsByClassName('modals-overlay')[0], // [0] берем первый элемент из коллекции нод
      zIndex = 1000;

  var showModal = function(modalNode) {
    modalNode.setAttribute('data-opened', 'true');       // вписываем доп атрибут для модального окна,
                                                        // для дальнейшего поиска открытых окон
    modalsOverlayNode.style.display = 'block';
    modalNode.style.display = 'block';
    modalNode.style.zIndex = zIndex++;

  }

  var onModalBtnClick = function(e) {
    var btnNode = e.target,
        modalId = btnNode.getAttribute('data-modal');

    if (modalId) {
      var modalNode = modalsOverlayNode.querySelector('[data-modal-id ="' + modalId + '"]');

      if (modalNode) {
        showModal(modalNode);
      } else {
        var modalUrl = btnNode.getAttribute('data-modal-url');  //получили в переменную шаблон модального окна

        if (modalUrl) {
          var req = new XMLHttpRequest();                   // в переменную положили команду создающую новый запрос на сервер

          req.open('GET', modalUrl, true);      // open - открыть новое соединение и сформируем ГЕТ запрос на сервер,
                                                          // третий параметр true - асинхронная загрузка, false - синхронная загрузка (бок)

          req.onreadystatechange = function (aEvt) {      // обработка запроса на ошибки после выполнения
            if (req.readyState === 4) {                   // readyState статус готовности к приемке запроса
              if (req.status === 200) {                   // status статус ответа от сервера
                modalsOverlayNode.innerHTML += req.responseText;

                modalNode = modalsOverlayNode.querySelector('[data-modal-id ="' + modalId + '"]');

                showModal(modalNode);

                var subModalBtns = modalsOverlayNode.querySelectorAll('[data-modal]');
                                                                                      // проверяем и вписываем все новые кнопки от новых модальных окон
                Array.prototype.forEach.call(subModalBtns, function(subModalBtns) {   //запускаем метод forEach для коллекции нод modalBtns как будто для массива
                  subModalBtns.addEventListener('click', onModalBtnClick);
                })

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
    var target = e.target,
        action = target.getAttribute('data-action'),
        openedModalNodes = modalsOverlayNode.querySelectorAll('[data-opened="true"]');
        // closeOverlay = openedModalNode.getAttribute('data-modal-close-overlay');


    if (e.target == e.currentTarget /* && closeOverlay !== 'false'*/) {
        modalsOverlayNode.style.display = '';

        Array.prototype.forEach.call(openedModalNodes, function(openedModalNode) {   //запускаем метод forEach для коллекции нод modalBtns как будто для массива
        openedModalNode.style.display = '';
        openedModalNode.removeAttribute('data-opened');     // удаляем все атрибуты data-opened чтоб закрыть все открытые модальные окна
      });
    }

    if (action && action === 'close') {
      var openedModalNode = target.parentNode.parentNode;

      openedModalNode.style.display = '';
      openedModalNode.removeAttribute('data-opened');     // удаляем все атрибуты data-opened чтоб закрыть все открытые модальные окна

      if(openedModalNodes.length <= 1) {
        modalsOverlayNode.style.display = '';
      }
    }
  });
});
