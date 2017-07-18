'use strict';

/*                                                             //dom.html

  function update (id, funct) {
  var ul = document.getElementById(id);               //
  var li = ul.getElementsByTagName('li');

  for (var i = 0; i < li.length; i++) {
    li[i].innerHTML = funct(li[i].innerHTML)         //.innerHTML вписывает во внутрь HTML
    }
}

update ('list1', function (value) {return +value / 9});
=======================================================
                                                              //dom2.html
var button = document.getElementById('button');
button.addEventListener('click', function() {           //создает список событий, при клике сделать
  console.log('click');
})
=======================================================
                                                             //dom2.html
window.addEventListener('load', function()) {       /// обертка для скрипта, сначала загрузится вся страница
                                                   /// потом отработает скрипт

  var button = document.getElementById('button');
  var form = document.getElementById('form');

  button.addEventListener('click', function(event) {                //ловим и выводим Ввод из инпута
    console.log(document.getElementById('input').value);
    event.stopPropagation();                                      //// остановить выполнение события...
    event.preventDefault();                                       ////... не передавая ...
    return false;                                                ////... упраление вверх
  });

  form.addEventListener('click', function(event) {           //
    console.log(event.target, event.currentTarget);
  });
});
=======================================================
                                                             //form.html
window.addEventListener('load', function() {                    /// ловим данные с форм ввода на странице
var mainForm = document.getElementById('mainForm');             /// обрабатываем данные

mainForm.a.addEventListener('keypress', function(e) {         // при нажатии клавиши, вывести введенное значение
  var input = parseInt(String.fromCharCode(e.keyCode), 10);   // с клавиатуры, преобразованное из код клавиши

  if ( typeof input !== 'number' || isNaN(input)) {          // проверка вводимых данных и запрет на ввод всего кроме numbera
    e.preventDefault();
    return false;
  }
console.log('pressed');

});

mainForm.addEventListener('submit', function(e) {           /// возвращаем результат на страницу
      console.log('submit');




      var a = +mainForm.a.value,
          b = +mainForm.b.value,
          operation = mainForm.operation.value,
          result;

          switch (operation) {
            case '+':
              result = a + b;
              break;
            case '-':
              result = a - b;
              break;
            case '*':
              result = a * b;
              break;
            case '/':
              result = a / b;
              break;
          }

          document.querySelector('[data-id="result"]').innerHTML = result; //.innerHTML вписывает result во внутрь HTML блок с data-id="result

      e.preventDefault();
      return false;
    });
});

=======================================================
*/
                                                             //formReg.html
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

/*
=======================================================
                                                             //searchForm.html
                                                                 // Всплывающие подсказки при заполнении поля ввода
window.addEventListener('load', function() {
  var searchForm =   document.querySelector('[data-id="search-form"]'),
      searchTextInput = searchForm['search-text'],
      listNode = document.querySelector('[data-id="list"]'),
      noDataNode = document.querySelector('[data-id="no-data"]');



  var search = function(searchDb, searchText) {
    //   var result = [];                                     // один из методов анализа подстроки
    //
    // for (var i = 0; i < searchDb.length; i++) {
    //   if (searchDb[i].startsWith(searchText)) {
    //     result.push(searchDb[i]);
    //   }
    // }
    // return result;

    var result = searchDb.filter(function(value) {
      return value.indexOf(searchText) === 0;
    });

    return result;
  };

  searchTextInput.addEventListener('keyup', function(e) {
    var searchText = searchTextInput.value;

    if (searchText) {
      var result = search(searchDb, searchText),
          listHtml = '',
          resultLength = result.length,
          i = 0;

      if (resultLength) {
        for(; i < resultLength; i++) {
          var value = result[i];

          listHtml += '<li data-search = "' +value + '">' + (i+1) + ': ' + value + '</li>';
        }

          listNode.innerHTML = listHtml;
          noDataNode.style.display = 'none';
      } else {
        listNode.innerHTML = '';
        noDataNode.style.display = 'block';
      }
    } else { listNode.innerHTML = ''; }
  });

  listNode.addEventListener('click', function(e) {
    if (e.target !== e.currentTarget) {
      searchTextInput.value = e.target.getAttribute('data-search');
    }
  });

  searchForm.addEventListener('submit', function(e) {

    window.open('https://www.google.com.ua/webhp?#q=' + searchTextInput.value.split(' ').join('+'));   // строка поиска для гугла

    e.preventDefault();
    return false;
  });
});
=======================================================
                                                             //jqeryFunction.html
                                                                  //определение по какой кнопке клик
                                                                  // и перезапись класса в КСС
var functions = {
  show: show,
  hide: hide,
  setColor: setColor,
  slideUp: slideUp,
  slideDown: slideDown,
  fadeOut: fadeOut,
  fadeIn: fadeIn,
}


window.addEventListener('load', function() {
  var actionsNode = document.querySelector('[data-id="actions"]'),           // получили ноду действия
      selectorInput = document.querySelector('input[name="selector"]'),      // получили ноду инпута
      colorInput = document.querySelector('input[name="color"]'),           // получили ноду цвета

  actionsNode.addEventListener('click', function(e) {
    if (e.target !== e.currentTarget) {                         // определили на каком месте по странице был клик
      var action = e.target.getAttribute('action'),               // получили описание с кликнутого места
          el = document.querySelector(selectorInput.value);        // вписали в переменную введенное пользователем значение


        if (action == 'setColor') {
          functions[action](el, colorInput.value);                //вызвали функцию с заданным описанием цвета
        } else {
          functions[action](el);                                  //вызвали функцию с заданным описанием клика
        }
    }

    e.stopPropagation();
    return false;
  });
});

function show(el) {
  el.style.display = '';
}

function hide(el) {
  el.style.display = 'none';
}

function setColor(el, color) {
  el.style.color = color;
}


function slideUp(el) {
  el.style.overflow = 'hidden';

  el.interval = setInterval(function() {                           //фиксируем сетинтервал для нашего элемента
    if (el.offsetHeight == 0) {
      clearInterval(el.interval);                               // обнуляем интервал для нашего элемента
    } else {
      el.style.height = Math.floor(el.offsetHeight/2) + 'px';                    // offsetHeight вернуть высоту блока с паддингами
    }
  }, 200)
}


function slideDown(el) {
  clearInterval(el.interval);                                  // обнуляем интервал для нашего элемента


  var clone = el.cloneNode(true);                                  //создаем клон нашего элемента
  clone.style.visibility = 'hidden';                               // скрываем его от пользователя
  clone.style.height = '';                                         // обнуляем высоту до первоночальной
  document.body.appendChild(clone);                               //вписываем в ДОМ структуру последним элементом

  var cloneHeigth = clone.offsetHeight;                         //получаем начальную высоту блока до скрытия его

  el.interval = setInterval(function() {                //фиксируем сетинтервал для нашего элемента
    if (el.offsetHeight >= cloneHeigth) {
      clearInterval(el.interval);                       // обнуляем интервал для нашего элемента
    } else {
      el.style.height = el.offsetHeight + 10 + 'px';                    // offsetHeight вернуть высоту блока с паддингами
    }
  }, 200);

  document.body.removeChild(clone);                              //удаляем клон элемента из ДОМ структуры
}

function fadeOut(el) {
  clearInterval(el.interval);                                  // обнуляем интервал для нашего элемента

  el.interval = setInterval(function() {
    var opacity = el.style.opacity || 1;

    if (opacity <= 0) {
      el.style.display = 'none';
      clearInterval(el.interval);
    } else {
      el.style.opacity = opacity - 0.1;
    }
  }, 200);
}

function fadeIn(el) {
  el.interval = setInterval(function() {
    var opacity = el.style.opacity;

    if (opacity >= 1) {
      clearInterval(el.interval);
    } else {
      el.style.display = '';
      el.style.opacity = +opacity + 0.1;
    }
  }, 200);
}

// function timeAnimation(time) {
  // time = timeInput.value;

// }
*/
