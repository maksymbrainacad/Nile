/*  alert('Я - JavaScript!');

================================================

var admin;
var name;
name = 'Василий';
admin = name;
alert( admin );

=====================================================

var ourPlanetName = 'Земля';
var userName = 'Петя';
alert( ourPlanetName );
alert( userName );

======================================================
var yourName = prompt ('That your name?', 'Enter your name');

alert (yourName);

=====================================================

var jsTitle = prompt ('Каково «официальное» название JavaScript?', 'Введите ваш ответ');

if (jsTitle == 'ECMAScript') {
  alert ('Верно!');
} else {
  alert ('Не знаете? «ECMAScript»!');
}
===============================================================

var yourNumber = prompt ('Введите любое число', '0');

if (yourNumber == 0) {
  alert ('Ваше число 0');
} else if (yourNumber == null) {
  alert ('Че? Решил отморозиться?!');
} else if (yourNumber < 10) {
  alert ('Ваше число меньше 10, но оно не 0');
} else if (yourNumber == 10) {
  alert ('Ваше число 10');
} else {
  alert ('Ваше число больше 10');
}
===============================================================

var login = prompt ('Введите Ваш логин', 'Your Login');

if (login == 'Your Login' | login == '') {
  alert ('Вы не ввели логин');
} else if (login == null) {
  alert ('Вход отменен');
} else if (login != 'Admin') {
  alert ('Ты кто такой? Давай даа ссссвидаааниа!');
} else if (login == 'Admin') {
    var password = prompt ('Enter password');
   if (password == null) {
    alert ('Вход отменен!');
  } else if (password != '123') {
    alert ('Accsess denied');
  } else if (password == '123') {
    alert ('Привет!');
  }
}
=========================================================================
                                                              // Сравнение суммы чисел
var a = +prompt ('Введите А');
var b = +prompt ('Введите B');

var result = (a + b < 4) ? 'Мало' : 'Много' ;

console.log(result);
===================================================================
                                                          // Проверка Логина
var login = prompt ('Enter login');

var message = (login == 'Вася') ? 'Привет' :
              (login == 'Директор') ? 'Здравствуйте' :
              (login == '') ? 'Нет логина' :
              'Я вас не знаю ))';

console.log(message);
====================================================================
                                                       // определение возраста
var age = parseInt( prompt('Enter your age'), 10);

if (age >= 14 && age <=90) {
  console.log(age);
} else {
  console.log('вы младше 14 или старше 90');
}

***********************************


var age = parseInt( prompt('Enter your age'), 10);

if (age <= 14 || age >= 90) {
  console.log(age);
} else {
  console.log('вы старше 14, но младше 90');
}
**********************************

var age = parseInt( prompt('Enter your age'));

if (!(age >= 14 && age <= 90)) {
  console.log(age);
} else {
  console.log('вы старше 14, но младше 90');
}
======================================================================
                                                        // Вывод всех четных чисел
for (var i = 0; i <= 10; i += 2) {
  console.log(i);
}

for (var i = 0; i <= 10; i++) {
  if (i%2 == 0)
  console.log(i);
}

for (var i = 0; i <= 10; i++) {
  if (i % 2) continue;
  console.log(i);
}

var i = 0;

while (i < 3) {
  console.log( "номер " + i + "!" );
  i++;
}
===========================================================================
                                                        // бесконечный цикл
for (;;) {
  var youNumber = prompt('Enter number');
  if (youNumber == 100 || youNumber == null) break;
}

while (true) {
  var youNumber = prompt('Enter number');
  if (youNumber == 100 || youNumber == null) break;
}
========================================================================
// Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
// Другими словами, n>1 – простое, если при делении на любое число от 2 до n-1 есть остаток.

// Создайте код, который выводит все простые числа из интервала от 2 до 10. Результат должен быть: 2,3,5,7.

// Для всех i от 1 до 10 {
//  проверить, делится ли число i на какое - либо из чисел до него
//  если делится, то это i не подходит, берем следующее
//  если не делится, то i - простое число

nextPrime:                                                              // вывод всех простых чисел
  for (var i = 2; i < 10; i++) {
    for (var j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }
    console.log(i); // простое число
  }
==========================================================================
                                                                       // определение введенной строки
var browser = prompt('Enter your browser');

  if (browser == 'IE') {
    console.log('О, да у вас IE!');

  } else if (browser == 'Chrome'
          || browser == 'Firefox'
          || browser == 'Safari'
          || browser == 'Opera') {
      console.log('Да, и эти браузеры мы поддерживаем');

  } else {
    console.log('Мы надеемся, что и в вашем браузере все ок!');
  }
============================================================================
                                                                       // определение числа А
var a = +prompt('Enter A', '');

switch (a) {
  case 0:
    console.log('0');
    break;

  case 1:
    console.log('1');
    break;

  case 2:
  case 3:
    console.log('2 or 3');
    break;

  default:
    console.log('A not 0, not 1, not 2, not 3');
}
==========================================================================
                                                                           // проверка возраста
function checkAge(age) {
  return (age > 18) ? true : confirm('Родители разрешили?');
  }

checkAge(13);
------------------------------

function checkAge(age) {
  return (age > 18) || confirm('Родители разрешили?');
  }

checkAge(13);
==========================================================
                                                                          // Возврат Минимального числа
function min(a, b) {
  var result;
  var a = +prompt('Enter A', '');
  var b = +prompt('Enter B', '');

  if (a < b) {
    result = a;

  } else if (a > b) {
    result = b;

  } else {
    result = a;
  }

  console.log(result);
  return(result);
}

min();
------------------

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

console.log(min(4, 3));
==================================================
                                                                               // Число Х в степени Н
function pow(x, n) {

  x = +prompt ('Enter X', '');
  n = +prompt ('Enter N', '');
  var x_in_n = x;

  for (var i = 1; i < n; i++) {
    x_in_n *= x;
  }

  return(x_in_n);
}

console.log(pow());
================================================
                                                                        // сумма всех целых чисел до числа Х
function sumTo(n) {
  var sum = n,
      ni = n;

  for (var i = 0; i < n; i++) {
    sum += --ni;
    }
  return sum;
}

console.log(sumTo(100));  // 5050
------------------------

function sumTo(n) {
  if (n != 0) {
    return n + sumTo(n - 1);
  } else {
    return n;
  };
}

console.log(sumTo(100));  // 5050
--------------------------------

function sumTo(n) {
  return n * (n + 1) / 2;
}

console.log(sumTo(100));  // 5050
================================
                                                                  // Произведение всех целых чисел до числа Х
function factorial(n) {
  return (n > 1) ? n * factorial(n-1) : n;
//  return n ? n * factorial(n - 1) : 1;
//  if (n > 1) {
//    return n * factorial(n - 1);
//  } else {

//    return n;
//  };
}

console.log(factorial(5));
==================================
                                                                  // Число Фибоначи
function fib(n) {
//  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  var a = 1,
      b = 1;
  for (var i = 3; i <= n; i++) {
      var c = a + b;
      a = b;
      b = c;
    };
    return b;
  }

console.log(fib(5));
=======================================
                                                                  // Возврат дробной части
function getDecimal(num) {
  if (num < 0) {
    num = -num;
  };
//  return num = num - Math.floor(num);
//  return num = num - ~~num;
  num = num - (num ^ 0);
  num = num.toFixed(2);

  return num;
}

console.log(getDecimal(1.6));
============================================
                                           // Генератор случайных чисел из интервала 0 - макс, не включая макс
function choicRandom(max) {

  var result = Math.random() * max ;

  result = result ^ 0;

  return result;
}

console.log( choicRandom(100) );
============================================
                                           // Генератор случайных чисел из интервала мин - макс, не включая макс
function choicRandom(min, max) {

  var result = (min + Math.random() * (max - min)) ;

  result = result ^ 0;

  return result;
}

console.log( choicRandom(0, 100) );
=================================================
                                                       // перевод в разные регистры
function ucFirst(str) {
  // только пустая строка в логическом контексте даст false
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst('petya'));

=================================================
                                                                       // проверка на спам
function checkSpam(str) {
  var marker = -1,
  a = str.toLowerCase();

  return !!(~a.indexOf('viagra') || ~a.indexOf('xxx'));

// if ( a.indexOf("viagra") != -1 ||  a.indexOf("xxx") != -1) {
  // marker = 0;

// } else if ( a.indexOf("xxx") != -1 ) {
  // marker = 0;
// };

  // return (marker == -1) ? str : 'Spam'
}

console.log(checkSpam('buy ViAgRA now'));  //Spam
console.log(checkSpam('free xxxxx'));  //Spam
console.log(checkSpam("innocent rabbit"));  //innocent rabbit
=================================================
                                                                             // усечение строки
function truncate(str, maxlength) {
  var strLength = str.length,
      delta = strLength - +maxlength,
      newStrLength = +maxlength - 3,
      endStr = '...';

  if (delta > 0) {
    str = str.slice(0, newStrLength) + endStr;
  };

  return str;
}

console.log(truncate('0123456789 123456789', 10));
=================================================
                                                                           // Выделение числа из строки

function extractCurrencyValue(str) {
  var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < num.length; j++) {
      if (str[i] == num[j]) {
        str = str.slice(i);
        break;
      };
    };
  };

  return +str;
}

console.log(extractCurrencyValue('UAH 120'));
=================================================
                                                                             // Объекты

var user = {};
user.name = 'Vasya';
user.surname = 'Petrov';
user['name'] = 'Sergey';
delete user['name'];
=================================================
                                                                            // Проверка Объекта на содержимое
function isEmpty(obj) {
  var key,
      counter = 0;

  for (key in obj) {
  //     return false;
  // }
  // return true;
    counter++;
  }

  if (counter == 0) {
  return true;
  } else {
  return false;
  }
}
var schedule = {};

console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "подъём";

console.log( isEmpty(schedule) ); // false
=================================================
                                                                          // Cумма всех свойств Объекта

"use strict";

var salaries = {
    "Вася": 1000,
    "Петя": 500,
    "Даша": 350
     },
     maxZp = 0,
     name = 'Нет сотрудников',
     key,
     sum = 0;


for (key in salaries) {
  sum += salaries[key];

  if (salaries[key] > maxZp) {
    maxZp += salaries[key];
    name = [key];
  }
}
console.log(sum);
console.log(name);
=================================================
                                                   // Умножение всех численных свойств Объекта на 2


// до вызова
var menu = {
  width: 200,
  height: 300,
  color: 700,
  title: "My menu",
  title2: "My sub-menu"
};

console.log(menu);

function multiplyNumeric(obj) {
  for (var key in obj) {
    var n = !isNaN( parseFloat( obj[key]) ) && isFinite( obj[key] );

    if ( n ) {
        obj[key] *= 2;
      }
    }
  }


multiplyNumeric(menu);
console.log(menu);
// после вызова
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
=================================================
                                                                  // Последний элемент массива

function last(arr) {
  var arrLastIndex = arr.length - 1;

  return arr[arrLastIndex];
}

var a = [1, 2, 3];

console.log(last(a));


a.push('Computer');

console.log(a);
=================================================
                                                             // Работа с началом и концом  массива
var styles = ['Jaz', 'Bluez'];
console.log(styles);

styles.push('Rock-N-Roll');
console.log(styles);

styles[styles.length - 2] = 'Classic';
console.log(styles);

styles.shift();
console.log(styles);

styles.unshift('Rap', 'Raggi');
console.log(styles);
=================================================
                                                                    // Случайный элемент из массива
var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"],
    min = 0,
    max = arr.length - 1,
    rand = Math.floor(Math.random() * (max + 1));

console.log(arr);
console.log(arr[rand]);
=================================================
                                                                   // Сумма всех элементов из массива
var arr = [],
    item,
    sum = 0,
    i = 0;

for (; item !== null; i++) {
   item = prompt('Enter number','');
  if ( item !== null) {
  arr.push(+item);
  sum += arr[i];
  }
}

console.log(arr);
console.log(sum);
=================================================
                                                                   // Поиск в  массиве
arr = ["test", 2, 1.5, false];

function find(obj, value) {
  var i = 0,
      position = -1;

  for (; i < obj.length; i++) {
    if (obj[i] === value) {
      position = i;
    }
  }

  return position;
}

console.log(find(arr, 2)); // 1
console.log(find(arr, 1.5)); // 2
console.log(find(arr, "test")); // 0
console.log(find(arr, 0)); // -1
console.log(find(arr, false)); // 3

=================================================
                                                               // Фильтр диапазона в массиве
var arr = [1, 4, 6, 8, 1.3, 2, 3, 9, 0, 3.5, 4, 5],
    filtrArr = [],
    i = 0;

function filterRange(arr, a, b) {
  for (; i < arr.length; i++) {
    if (a <= arr[i] && arr[i] <= b) {
      filtrArr.push(arr[i]);
    }
  }

  return filtrArr;
}

console.log(filterRange(arr, 3, 8));
=================================================
                                                        // Подмасив с максимальной суммой элементов в  массиве
function getMaxSubSum(arr) {
  var maxSum = 0,
    partialSum = 0;
  for (var i = 0; i < arr.length; i++) {
    partialSum += arr[i];
    maxSum = Math.max(maxSum, partialSum);
    if (partialSum < 0) partialSum = 0;
  }
  return maxSum;
}


console.log(getMaxSubSum([-1, 2, 3, -9])); // 5 (сумма выделенных)
console.log(getMaxSubSum([2, -1, 2, 3, -9])); // 6
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
console.log(getMaxSubSum([-2, -1, 1, 2])); // 3
console.log(getMaxSubSum([100, -9, 2, -3, 5])); // 100
console.log(getMaxSubSum([1, 2, 3])); // 6 (неотрицательные - берем всех)
=================================================
                                                                 // Добавление класса в строку
function addClass(obj, cls) {
  var classes = obj.className ? obj.className.split(' ') : [];

  for (var i = 0; i < classes.length; i++) {
    if (classes[i] == cls) return; // класс уже есть
  }

  classes.push(cls); // добавить

  obj.className = classes.join(' '); // и обновить свойство
}

var obj = {
  className: 'open menu'
};


addClass(obj, 'new'); // obj.className='open menu new'
addClass(obj, 'open'); // без изменений (класс уже существует)
addClass(obj, 'me'); // obj.className='open menu new me'

alert( obj.className ); // "open menu new me"
=================================================
                                                                  // Обработка данных в строке массива

function camelize(str) {
  var arr = str.split('-');

  for (var i = 1; i < arr.length; i++) {
    // преобразовать: первый символ с большой буквы
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }

  return arr.join('');
}
console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));
=================================================
                                                                   // Удаление класса из строки
function removeClass(obj, cls) {
  var classes = obj.className.split(' ');

  for (var i = 0; i < classes.length; i++) {
    if (classes[i] == cls) {
      classes.splice(i, 1); // удалить класс
      i--; // (*)
    }
  }
  obj.className = classes.join(' ');
}

var obj = {
  className: 'open open menu '
};

console.log(removeClass(obj, 'bla-bla-bla')); // без изменений (нет такого класса)
console.log(removeClass(obj, 'open')); // obj.className='menu'

console.log( obj.className ); // "menu"
=================================================
                                                              // Фильтрация массива по диапазону
function filterRangeInPlace(arr, a, b) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i--, 1);
    }
  }
  return arr;
}

var obj = [5, 3, 8, 1];

console.log(filterRangeInPlace(obj, 1, 4));
=================================================
                                                           // Сортировка массива в обратном порядке
var arr = [5, 2, 1, -10, 8];

function compareReverse(a, b) {
  return b - a;
}

arr.sort(compareReverse);
console.log(arr);
=================================================
                                                         // Копирование массива и сортировка копии
var arr = ["HTML", "JavaScript", "CSS"],
    arrSorted = [],
    i = 0;

    for (; i < arr.length; i++) {
      arrSorted[i] = arr[i];
    }

    function sortArr(a, b) {
      return b < a;
    }

arrSorted.sort(sortArr);

console.log(arr); // HTML, JavaScript, CSS (без изменений)
console.log(arrSorted); // CSS, HTML, JavaScript
=================================================
*/                                                           // Разбитие массива на подмассивы заданной длинны
var _= ( function () {
  return {
    chunk: function(arr, innerArrLength) {
      var arrLength = arr.length,
          clonArr = arr.slice(),
          clonArrLength = clonArr.length,
          tempElement,
          newArr = [];

      if (arrLength <= innerArrLength) {
        newArr = clonArr.slice();
          // for (var i = arrLength; i < innerArrLength; i++) {
            // newArr[i] = [];
            return newArr;
          // }
        }

      if (arrLength > innerArrLength) {
        while (clonArrLength > 0) {
          tempElement = clonArr.splice(0, innerArrLength);
          newArr.push(tempElement);
          clonArrLength -= innerArrLength;
          }
      }
      return newArr;
    }
  }
})();
 // console.log('Первый ввод:');
 // console.log(_.chunk(['a', 'b', 'c', 'd'], 2));  // → [['a', 'b'], ['c', 'd']]
 // console.log('Второй ввод:');
 // console.log(_.chunk(['a', 'b', 'c', 'd'], 3));  // → [['a', 'b', 'c'], ['d']]
 // console.log('Третий ввод:');
 // console.log(_.chunk(['a', 'b', 'c', 'd'], 6));  // → [['a', 'b', 'c', 'd']]

console.log(_.chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 2));
