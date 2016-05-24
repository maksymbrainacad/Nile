window.addEventListener('load', function() {
  var regForm =  document.querySelector('[data-id="regForm"]'),
      capchaNode =  document.querySelector('[data-id="capcha"]'),
      reloadCapcha = document.querySelector('[data-id="reload-capcha"]');

      var getRandom = function() {
        return Math.random().toString(36).substr(2, 4);    // Генератор случайных чисел и формирование строки из 4х элементов
      }                                                    // для Капчи


  var capcha = getRandom();

  capchaNode.innerHTML = capcha;

  reloadCapcha.addEventListener('click', function() {           //создает список событий, при клике сделать
    capcha = getRandom();
    capchaNode.innerHTML = capcha;
  })



  regForm.addEventListener('submit', function(e) {           /// возвращаем результат на страницу
    var requiredInputs = regForm.querySelectorAll('[required]'),
        requiredInputsLength = requiredInputs.length,
        i = 0;

    for (; i < requiredInputsLength; i++) {
      var node = requiredInputs[i];
      if (!node.value) {
        console.log('Field ' + node.name + ' is required');
      }
    }



    if (!regForm.name.value) {
      console.log('No User Name');
    }

    if (!regForm.email.value) {
      console.log('No Email');
    } else if (!/\S+@\S+\.\S+/.test(regForm.email.value)) {   //// регулярное выражение для проверки введенных
      console.log('No correct Email');                       ////данных в поле имейл на содержание @ и .
    }

    if (!regForm.password.value) {
      console.log('No Password');
    } else if (regForm.password.value !== regForm.confirmPassword.value) {
        console.log('Password dosn`t match');
      }

    if (!regForm.confirmPassword.value) {
      console.log('No Confirm Password');
    }

    if (!regForm.capcha.value) {
      console.log('No capcha');
    } else if (regForm.capcha.value !== capcha) {
      console.log('Capcha is not correct');
    }


    e.preventDefault();
    return false;
  });
});
