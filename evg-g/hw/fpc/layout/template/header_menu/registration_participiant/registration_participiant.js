window.addEventListener('load', function() {
  var regForm =  document.querySelector('[data-id="regForm"]'),
      capchaNode =  document.querySelector('[data-id="capcha"]'),
      reloadCapcha = document.querySelector('[data-id="reload-capcha"]'),
      counterMessage = 1;


      var getRandom = function() {
        return Math.random().toString(36).substr(2, 4);    // Генератор случайных чисел и формирование строки из 4х элементов
      }                                                    // для Капчи


  var capcha = getRandom();

  capchaNode.innerHTML = capcha;

  reloadCapcha.addEventListener('click', function() {           //создает список событий, при клике сделать
    capcha = getRandom();
    capchaNode.innerHTML = capcha;
  });

  var showMessage = function(messageFor) {             //  ---- функция показывает скрытое сообщение пользователю, принимает селектор для какого поля отобразить сообщение: '[data-id="..."]'
    var messageForNode = document.querySelector(messageFor),
        messageForNodeClass = messageForNode.className,
        newClass = TamperingClass.changeClass("hidden", "show", messageForNodeClass);

      messageForNode.className = newClass;
      counterMessage = ++counterMessage;
  };

  var hiddenMessage = function(messageFor) {             //  ---- функция скрывает сообщение показанное пользователю, принимает селектор для какого поля скрываем сообщение: '[data-id="..."]'
    var messageForNode = document.querySelector(messageFor),
        messageForNodeClass = messageForNode.className,
        newClass = TamperingClass.changeClass("show", "hidden", messageForNodeClass);

      messageForNode.className = newClass;
      counterMessage = --counterMessage;
  };


  var timeShowMessage = function(counterMessage, messageFor) {  // функция  показывает и скрывает сообщение пользователю за определенное время
    showMessage(messageFor);
    setTimeout(hiddenMessage, counterMessage * 5 * 1000, messageFor);
  };


  regForm.addEventListener('submit', function(e) {           /// возвращаем результат на страницу
    var requiredInputs = regForm.querySelectorAll('[required]'),
        requiredInputsLength = requiredInputs.length,
        i = 0;

    for (; i < requiredInputsLength; i++) {                   // Проверка на заполнение всех обязательных к заполнению полей
      var node = requiredInputs[i];
      if (!node.value) {
        console.log('Поле ' + node.name + ' не заполненно');
      }
    }



    if (!regForm.name.value) {                                   // ----------------  Проверка ввода Имени Пользователя
      timeShowMessage(counterMessage, '[data-id="name"]');
    }


                            //// регулярное выражение для проверки введенных данных в поле имейл на содержание @ и .
    if ( !regForm.email.value || (!/\S+@\S+\.\S+/.test(regForm.email.value)) ) {       // ----------------  Проверка ввода Email Пользователя
      timeShowMessage(counterMessage, '[data-id="email"]');
    }



    if (!regForm.phone.value) {                              // ----------------  Проверка ввода Email Пользователя
      timeShowMessage(counterMessage, '[data-id="phone"]');
    }


                                                            // ----------------  Проверка ввода выбора тренинга Пользователем
    if (!regForm.anyNearby.checked && !regForm.communication.checked && !regForm.telemarketing.checked && !regForm.perfectionism.checked && !regForm.goalSetting.checked && !regForm.stress.checked && !regForm.timeManagement.checked && !regForm.emotionalIntelligence.checked && !regForm.salesSkills.checked && !regForm.procrastination.checked) {
      timeShowMessage(counterMessage, '[data-id="selectionTraining"]');
    }



    if (!regForm.capcha.value || regForm.capcha.value !== capcha) {   // ----------------  Проверка ввода капчи Пользователем
      timeShowMessage(counterMessage, '[data-id="capchaNotCorrect"]');
    }


    if (counterMessage == 1) {       // ----------------  Проверка верного ввода всех полей Пользователем, вывод сообщения об успешной отпраке формы
      timeShowMessage(counterMessage, '[data-id="accessSubmissionFormRegistration"]');
      
      regForm.name.value = '';
      regForm.email.value = '';
      regForm.phone.value = '';
      regForm.dataParticipation.value = '';
      regForm.messageParticipation.value = '';
      regForm.capcha.value = '';
    }



    e.preventDefault();
    return false;
  });
});
