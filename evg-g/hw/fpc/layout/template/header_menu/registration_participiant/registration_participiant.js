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
        var maxQuantityVersionBackgroundColor = 10,    // макс кол-во вариантов фона
            capchaBackgroundColor,
            numberBackgroundColor = Math.random() * (maxQuantityVersionBackgroundColor + 1);  // Генератор случайных чисел (не включаяя maxQuantityVersionBackgroundColor) и формирование цвета фона для КОДА КАПЧИ из макс кол-ва вариантов фона

        numberBackgroundColor = numberBackgroundColor ^ 0;

        switch (numberBackgroundColor) {     // кол-во case рекомендуется быть = (maxQuantityVersionBackgroundColor - 1)
          case 0:
            capchaBackgroundColor = "rgba(200, 198, 30, 0.83)";
            break;
          case 1:
            capchaBackgroundColor = "rgba(134, 218, 50, 0.87)";
            break;
          case 2:
            capchaBackgroundColor = "rgba(34, 199, 135, 0.86)";
            break;
          case 3:
            capchaBackgroundColor = "rgba(53, 216, 221, 0.84)";
            break;
          case 4:
            capchaBackgroundColor = "rgba(36, 97, 189, 0.85)";
            break;
          case 5:
            capchaBackgroundColor = "rgba(119, 71, 172, 0.85)";
            break;
          case 6:
            capchaBackgroundColor = "rgba(167, 59, 166, 0.82)";
            break;
          case 7:
            capchaBackgroundColor = "rgba(245, 15, 111, 0.86)";
            break;
          case 8:
            capchaBackgroundColor = "rgba(153, 90, 96, 0.85)";
            break;
          case 9:
            capchaBackgroundColor = "rgba(105, 164, 113, 0.86)";
            break;
          case 10:
            capchaBackgroundColor = "rgba(120, 114, 156, 0.87)";
            break;
          default:
          capchaBackgroundColor = "rgba(241, 211, 199, 0.87)";
        }

        return capchaBackgroundColor;
      }



  var capcha = getRandomCapchaPassword();

  capchaNode.innerHTML = capcha;

  var capchaCurrentBackgroundColor = getRandomCapchaBackgroundColor();

  capchaNode.style.backgroundColor = capchaCurrentBackgroundColor;


  reloadCapcha.addEventListener('click', function() {           //создает список событий, при клике сделать
    capcha = getRandomCapchaPassword();
    capchaNode.innerHTML = capcha;

    capchaCurrentBackgroundColor = getRandomCapchaBackgroundColor();
    capchaNode.style.backgroundColor = capchaCurrentBackgroundColor;

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

  var refreshPage = function (timeShowMessageAccess) {     // функция обновления страницы
    setTimeout(function () {
        location.reload();
    }, timeShowMessageAccess * 5 *1000);
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
      var timeShowMessageAccess = 2;
      timeShowMessage(timeShowMessageAccess, '[data-id="accessSubmissionFormRegistration"]');

      refreshPage(timeShowMessageAccess);

    } else {
      timeShowMessage(counterMessage, '[data-id="dataEntryVerification"]');
    }

    e.preventDefault();
    return false;
  });
});
