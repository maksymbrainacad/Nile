window.addEventListener('load', function () {   // ожидаем полной загрузки страницы
  var mainHeader = document.querySelector('[data-id="main-header"]'), // получаем ноду элемента по селектору [data-id="main-header"]
      mainContent = document.getElementById('content'), // получаем ноду по Id
      mainFooter = document.getElementsByClassName('footer'); // получаем ноду по ClassName

      setTimeout( function() {   // setTimeOut выполнить через Х милисекунд, может принимать первым параметром Выражение и само обернет его в функцию
        mainContent.innerHTML = 'New Content';  // innerHTML вписать в mainContent данные
      }, 3000);

      setTimeout( function() {   // setTimeOut выполнить через Х милисекунд
        mainFooter.innerHTML = 'New Footer';  // innerHTML вписать в mainContent данные
      }, 5000);

      /* =============================================  */

      var ulNode = mainHeader.querySelector('ul');    // взять ноду ul в mainHeader(document.querySelector('[data-id="main-header"]'))



      mainHeader.addEventListener('click', function(e) {   // addEventListener добавить обработчик событий на mainHeader при событии click
        console.log('mainHeader');
      });


      ulNode.addEventListener('click', function(e) {   // addEventListener добавить обработчик событий на ulNode при событии click
        if(e.target !== e.currentTarget) {   // e.currentTarget - на чем висит обработчик (ulNode), e.target - куда был клик (в этом случае li в ul)
          e.target.innerHTML += 'a';
        }
        console.log('click');

        e.stopPropagation();         // останавливаем выполнение при клике, не пускаем подьем события вверх
        // e.preventDefault();      // не выполнять стандартное действие (например сабмит у формы)
        return false;
      });


      ulNode.addEventListener('dblclick', function(e) {   // addEventListener добавить обработчик событий на ulNode при событии ДВОЙНОЙ click
        if(e.target !== e.currentTarget) {
          var liText = e.target.innerHTML; // вписали содержимое из ДОМА e.target.innerHTML в переменную
          var currentNode = e.target;


//  ============ один способ  ==
          // e.target.innerHTML = '<input type="text" value="' + value + '" />'; // переписали ДОМ на инпут тип
          //
          // var input = e.target.querySelector('input');

//  ============ второй способ  ==
             input.type = 'text';
            input.value = liText;
            input.onkeypress = function(e) {    // второй способ повесить обработчик событий()
              if (e.keyCode == 13) {
                currentNode.innerHTML = this.value;  // вписали в поле содержимое ввода
              }
            };

            currentNode.innerHTML = '';    // отчистили содержимое поля

            currentNode.appendChild(input);   // appendChild - добавляет в currentNode дочерний элемент input(document.createElement('input'))
            // currentNode.revmoveChild(input);   // revmoveChild - удаляет в currentNode дочерний элемент input(document.createElement('input'))

        }

        e.stopPropagation();
        return false;
      });

//  ============================
  var liNodes = mainHeader.querySelectorAll('li');  // получаем в МАССИВЕ коллекцию нод всех элементов по селектору li

  //1
  for (var i = 0; i < liNodes.length; i++) {   // в цикле вешаем обработчик событий на каждый элемент
    liNodes[i].addEventListener('click', function(){

    });
  }

  //2
  Array.prototype.forEach.call(liNodes, function(node) { // // в цикле forEach в коллекцию нод используя прототипы Массивов и окружении liNodes и вешаем обработчик событий на каждый элемент

    node.addEventListener('click', function(){
      
    });
  });

  // [Любой массив].filter.call(liNodes, function(node) {  // метод filter фильтрует элементы массива по заданному условию
  //   Условия фильтрации
  // });
  //
  // [Любой массив].map(function(node) {  // метод map обрабатывает элементы массива
  //   Условия обработки
  // });

});
