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
button.addEventListener('click', function() {           //сщздает список событий, при клике сделать
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
*/                                                              //form.html
window.addEventListener('load', function() {                    /// ловим данные с форм ввода на странице
  document.getElementById('mainForm')                           /// обрабатываем данные
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
