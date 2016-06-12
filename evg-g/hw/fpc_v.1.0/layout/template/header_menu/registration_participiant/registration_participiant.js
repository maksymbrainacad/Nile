window.addEventListener('load', function() {
  var regForm =  document.querySelector('[data-id="regForm"]'),
      capchaNode =  document.querySelector('[data-id="capcha"]'),
      reloadCapcha = document.querySelector('[data-id="reload-capcha"]'),
      counterMessage = 1;


      var getRandomCapchaPassword = function() {  // Формирования КОДА КАПЧИ
        var capchaPasswordLength = 4,
            capchaPassword = Math.random().toString(36).substr(2, capchaPasswordLength), // Генератор случайных чисел и формирование строки КОДА КАПЧИ из 4х элементов
            capchaPasswordNumberCharacterUppercase = (Math.random() * (capchaPasswordLength + 1)) ^ 0,
            capchaPasswordCharacter,
            capchaPasswordArr = [],
            i = 0;

            for (; i < capchaPasswordLength; i++) {
              capchaPasswordCharacter = capchaPassword[i];

              if (i == (capchaPasswordNumberCharacterUppercase - 1)) {
                capchaPasswordCharacter = capchaPasswordCharacter.toUpperCase();
              }

              capchaPasswordArr.push(capchaPasswordCharacter);
            }
            capchaPassword = capchaPasswordArr.join('');
            console.log(capchaPasswordArr);
            console.log(capchaPasswordNumberCharacterUppercase);

        return capchaPassword;
      }


      var getRandomCapchaBackgroundColor = function() {   // Формирования цвета фона для КОДА КАПЧИ
        var capchaBackgroundColor = '#' + Math.random().toString(16).substr(3, 6); // Генератор случайных чисел и формирование кода цвета фона капчи в формате HEX.

        return capchaBackgroundColor;
      }



  var capcha = getRandomCapchaPassword();

  capchaNode.innerHTML = capcha;

  var capchaCurrentBackgroundColor = getRandomCapchaBackgroundColor();

  capchaNode.style.backgroundColor = capchaCurrentBackgroundColor;


  reloadCapcha.addEventListener('click', function() {           //создает список событий, при клике "Обновить Код" капчи
    capcha = getRandomCapchaPassword();
    capchaNode.innerHTML = capcha;

    capchaCurrentBackgroundColor = getRandomCapchaBackgroundColor();
    capchaNode.style.backgroundColor = capchaCurrentBackgroundColor;

  });


  var refreshPage = function (timeShowMessageAccess) {     // функция обновления страницы
    setTimeout(function () {
        location.reload();
    }, timeShowMessageAccess * 5 *1000);
  };



  regForm.addEventListener('submit', function(e) {                       /// возвращаем результат на страницу
    var requiredInputs = regForm.querySelectorAll('[required]'),
        requiredInputsLength = requiredInputs.length,
        statusMessage, // статус сообщения предупреждения (1-показанно/ 0-скрыто)
        i = 0;

    for (; i < requiredInputsLength; i++) {                   // Проверка на заполнение всех обязательных к заполнению полей
      var node = requiredInputs[i];
      if (!node.value) {
        console.log('Поле ' + node.name + ' не заполненно');
      }
    }


    if (!regForm.name.value) {                                   // ----------------  Проверка ввода Имени Пользователя
      statusMessage = Message.status('[data-id="name"]');
      if (statusMessage == 0) {
        Message.show('[data-id="name"]');
      }

      statusMessage = Message.status('[data-id="dataEntryVerification"]');
      if (statusMessage == 0) {
        Message.show('[data-id="dataEntryVerification"]');
      }

    } else {
      statusMessage = Message.status('[data-id="name"]');
      if (statusMessage == 1 ) {
        Message.hidden('[data-id="name"]');
      }
    }


                            //// регулярное выражение для проверки введенных данных в поле имейл на содержание @ и .
    if ( !regForm.email.value || (!/\S+@\S+\.\S+/.test(regForm.email.value)) ) {       // ----------------  Проверка ввода Email Пользователя
      statusMessage = Message.status('[data-id="email"]');
      if (statusMessage == 0) {
        Message.show('[data-id="email"]');
      }

      statusMessage = Message.status('[data-id="dataEntryVerification"]');
      if (statusMessage == 0) {
        Message.show('[data-id="dataEntryVerification"]');
      }

    } else {
      statusMessage = Message.status('[data-id="email"]');
      if (statusMessage == 1 ) {
        Message.hidden('[data-id="email"]');
      }
    }



    if (!regForm.phone.value) {                              // ----------------  Проверка ввода Email Пользователя
      statusMessage = Message.status('[data-id="phone"]');
      if (statusMessage == 0) {
        Message.show('[data-id="phone"]');
      }

      statusMessage = Message.status('[data-id="dataEntryVerification"]');
      if (statusMessage == 0) {
        Message.show('[data-id="dataEntryVerification"]');
      }

    } else {
      statusMessage = Message.status('[data-id="phone"]');
      if (statusMessage == 1 ) {
        Message.hidden('[data-id="phone"]');
      }
    }


                                                            // ----------------  Проверка ввода выбора тренинга Пользователем
    if (!regForm.anyNearby.checked && !regForm.communication.checked && !regForm.telemarketing.checked && !regForm.perfectionism.checked && !regForm.goalSetting.checked && !regForm.stress.checked && !regForm.timeManagement.checked && !regForm.emotionalIntelligence.checked && !regForm.salesSkills.checked && !regForm.procrastination.checked) {
      statusMessage = Message.status('[data-id="selectionTraining"]');
      if (statusMessage == 0) {
        Message.show('[data-id="selectionTraining"]');
      }

      statusMessage = Message.status('[data-id="dataEntryVerification"]');
      if (statusMessage == 0) {
        Message.show('[data-id="dataEntryVerification"]');
      }

    } else {
      statusMessage = Message.status('[data-id="selectionTraining"]');
      if (statusMessage == 1 ) {
        Message.hidden('[data-id="selectionTraining"]');
      }
    }



    if (!regForm.capcha.value || regForm.capcha.value !== capcha) {   // ----------------  Проверка ввода капчи Пользователем
      statusMessage = Message.status('[data-id="capchaNotCorrect"]');
      if (statusMessage == 0) {
        Message.show('[data-id="capchaNotCorrect"]');
      }

      statusMessage = Message.status('[data-id="dataEntryVerification"]');
      if (statusMessage == 0) {
        Message.show('[data-id="dataEntryVerification"]');
      }

    } else {
      statusMessage = Message.status('[data-id="capchaNotCorrect"]');
      if (statusMessage == 1 ) {
        Message.hidden('[data-id="capchaNotCorrect"]');
      }
    }

           // ----------------  Проверка верного ввода всех полей Пользователем, вывод сообщения об успешной отпраке формы
    if ( regForm.name.value) {
      if (regForm.email.value && (/\S+@\S+\.\S+/.test(regForm.email.value))) {
        if (regForm.phone.value) {
          if (regForm.anyNearby.checked || regForm.communication.checked || regForm.telemarketing.checked || regForm.perfectionism.checked || regForm.goalSetting.checked || regForm.stress.checked || regForm.timeManagement.checked || regForm.emotionalIntelligence.checked || regForm.salesSkills.checked || regForm.procrastination.checked) {
            if (regForm.capcha.value && regForm.capcha.value == capcha) {

              statusMessage = Message.status('[data-id="dataEntryVerification"]');
              if (statusMessage == 1) {
                Message.hidden('[data-id="dataEntryVerification"]');
              }

              var timeShowMessageAccess = 2;
              Message.show('[data-id="accessSubmissionFormRegistration"]');
              refreshPage(timeShowMessageAccess);
            }
          }
        }
      }
    }

    e.preventDefault();
    return false;
  });
});
