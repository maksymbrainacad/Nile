                                                              //jqeryFunctionTime.html
                                                                  //определение по какой кнопке клик
                                                                  // и перезапись класса в КСС
var functions = {
  show: show,
  hide: hide,
  setColor: setColor,
  slideUp: slideUp,
  slideDown: slideDown,
  fadeOut: fadeOut,
  fadeIn: fadeIn
}


window.addEventListener('load', function() {
  var actionsNode = document.querySelector('[data-id="actions"]'),            // получили ноду действия
      selectorInput = document.querySelector('input[name="selector"]'),      // получили ноду инпута
      colorInput = document.querySelector('input[name="color"]');           // получили ноду цвета
      timeInput = document.querySelector('input[name="time"]');           // получили ноду времени анимации

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

  var interval = setInterval(function() {
    if (el.offsetHeight == 0) {
      clearInterval(interval);
    } else {
      el.style.height = Math.floor(el.offsetHeight/2) + 'px';                    // offsetHeight вернуть высоту блока с паддингами
    }
  }, 200)
}


function slideDown(el) {
  var clone = el.cloneNode(true);                                  //создаем клон нашего элемента
  clone.style.visibility = 'hidden';                               // скрываем его от пользователя
  clone.style.height = '';                                         // обнуляем высоту до первоночальной
  document.body.appendChild(clone);                               //вписываем в ДОМ структуру последним элементом

  var cloneHeight = clone.offsetHeight;                         //получаем начальную высоту блока до скрытия его

  var interval = setInterval(function() {
    if (el.offsetHeight >= cloneHeight) {
      clearInterval(interval);
    } else {
      el.style.height = el.offsetHeight + 10 + 'px';                    // offsetHeight вернуть высоту блока с паддингами
    }
  }, 200);

  document.body.removeChild(clone);                              //удаляем клон элемента из ДОМ структуры
}

function fadeOut(el) {
  var interval = setInterval(function() {
    var opacity = el.style.opacity || 1;

    if (opacity <= 0) {
      el.style.display = 'none';
      clearInterval(interval);
    } else {
      el.style.opacity = opacity - 0.1;
    }
  }, 200);
}

function fadeIn(el) {
  var interval = setInterval(function() {
    var opacity = el.style.opacity;

    if (opacity >= 1) {
      clearInterval(interval);
    } else {
      el.style.display = '';
      el.style.opacity = +opacity + 0.1;
    }
  }, 200);
}

function timeAnimation(time) {
  time = timeInput.value;

}
