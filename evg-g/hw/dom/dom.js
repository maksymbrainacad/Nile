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



  //   if (!regForm.name.value) {
    //   console.log('No User Name');
    // }
    //
    // if (!regForm.email.value) {
    //   console.log('No Email');
    // } else if (!/\S+@\S+\.\S+/.test(regForm.email.value)) {   //// регулярное выражение для проверки введенных
    //   console.log('No correct Email');                       ////данных в поле имейл на содержание @ и .
    // }
    //
    // if (!regForm.password.value) {
    //   console.log('No Password');
    // } else if (regForm.password.value !== regForm.confirmPassword.value) {
    //     console.log('Password dosn`t match');
    //   }
    //
    // if (!regForm.confirmPassword.value) {
    //   console.log('No Confirm Password');
    // }
    //
    // if (!regForm.capcha.value) {
    //   console.log('No capcha');
    // } else if (regForm.capcha.value !== capcha) {
    //   console.log('Capcha is not correct');
    // }


    e.preventDefault();
    return false;
  });
});

=======================================================
*/                                                              //searchForm.html
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
