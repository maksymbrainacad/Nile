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
*/
var login = prompt ('Введите Ваш логин', 'Your Login');

if (login == 'Your Login' | login == '') {
  alert ('Вы не ввели логин');
} else if (login == null) {
  alert ('Вход отменен');
} else if (login != 'Admin') {
  alert ('Ты кто такой? Давай даа ссссвидаааниа!');
} else /*if (login == 'Admin') */{
    var password = prompt ('Enter password');
   if (password == null) {
    alert ('Вход отменен!');
  } else if (password != '123') {
    alert ('Accsess denied');
  } else /*if (password == '123')*/ {
    alert ('Привет!');
  }
}
