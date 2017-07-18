window.addEventListener('load', function() {
  var modalBtns = document.querySelectorAll('[data-modal]'),
      modalsOverlayNode = document.getElementsByClassName('modals-overlay')[0], // [0] берем первый элемент из коллекции нод
      zIndex = 1000,
      modalTemplate;

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
        var modalUrl = btnNode.getAttribute('data-modal-url'),  //получили в переменную шаблон модального окна
            addAndShowModal = function (modalHtml) {            
              modalsOverlayNode.innerHTML += modalHtml;

              modalNode = modalsOverlayNode.querySelector('[data-modal-id ="' + modalId + '"]');

              showModal(modalNode);

              var subModalBtns = modalsOverlayNode.querySelectorAll('[data-modal]');
                                                                                    // проверяем и вписываем все новые кнопки от новых модальных окон
              Array.prototype.forEach.call(subModalBtns, function(subModalBtns) {   //запускаем метод forEach для коллекции нод modalBtns как будто для массива
                subModalBtns.addEventListener('click', onModalBtnClick);
              })

            }

        if (modalUrl) {
          $ajax({                                               // формируем запрос на сервер, вызываея его нашей функцией $ajax
            url: modalUrl,
            success: function(result) {
              addAndShowModal(result);
            }
          });
        } else {
          var url = btnNode.getAttribute('data-url');  //получили в переменную json для модального окна

          if (url) {
            $ajax({
              url: url,
              responseType: 'json',
              success: function(result) {
                var onTamplateLoaded = function () {
                  var modalHandlebars = Handlebars.compile(modalTemplate); // формируем новое модальное окно на лету из принятой json строки
                                                                            //  Handlebars.compile(modalTemplate) возвращает функцию нашего шаблона
                  result.modalId = modalId;                                 // передаем айдишник из jsona в шаблон
                  var modalHtml = modalHandlebars(result);

                  addAndShowModal(modalHtml);
                };

                if (modalTemplate) {
                  onTamplateLoaded();
                } else {
                    $ajax({
                      url: '/modals/temlates_modal.html',
                      success: function(result) {
                        modalTemplate = result;
                        onTamplateLoaded();
                      }
                    });
                }
              }
            });
          }
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
