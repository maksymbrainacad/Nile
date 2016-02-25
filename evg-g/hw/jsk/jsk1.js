/*if (confirm ( 'Are you man')) {
    alert ('You are happy');
}
else {
  alert ( 'Wow' );
}

prompt ( 'Input your name' );

document.write ( 'wrot by js' );


var name = 'test';

console.log (name);

==========================================================
var userInput = prompt ( 'введите два числа через пробел' );

var userInputArray = userInput.split(' '); // создаем массив из строки разделив по заданному параметру

console.log( userInputArray );

var a = parseInt(userInputArray[0], 10); // преобразовываем в численный тип данных
var b = parseInt(userInputArray[1], 10);

console.log(a+b);

var userOperation = prompt ( 'Введите математическую операцию "+" "-" "*" "/"' );

console.log(eval(a + userOperation + b)); // обработка (a + userOperation + b) evalом как отдельным браузером куска кода яваскрипт
==============================================================

var userInput = prompt ('Введите число');         // условия if - else
if (userInput == 1) {
    console.log('1');
} else if (userInput == 2) {
    console.log('2');
} else {
    console.log('not 1 and not 2');
}
===============================================================


var userInput = prompt ('Введите что хотите :)');       // условия switch - case
switch (userInput) {
  case 'a': console.log('a');
    break;
  case 'hello': console.log('Hi');
    break;
  default: console.log('Ha-Ha-Ha');
    break;
}
==============================================================
var person = {fname:'John', lname:'Doe',age:25};   // Цикл прохода по обьекту
  var text = '';
  for( var x in person ) {
      text += person[x]+' ';
  }

  console.log(text);
  ==============================================


for (var i = 0; i < 10; i++) {
    if (i%2 == 0) {
    console.log(i);
  }
}
=======================================
                                                      // разобраться, что то не правильно работает!!!!!!!!!!!!
var point = +prompt ('enter your point 0-100');

if (point >=0 & point <=59) {
  mark ='FX';
} else if (point >=60 && point <=64) {
  mark = 'E';
} else if (point >=65 && point <=74) {
  mark ='D';
} else if (point >=75 && point <=84) {
  mark ='C';
} else if (point >=85 && point <=94) {
  mark ='B';
} else if (point >=95 && point <=100) {
  mark ='A';
} else if (point >100) {
  mark = 'Wow! You a cool!';
} else if (point <0) {
  mark = 'Foo! You a Loozer!';
} else if (point == null && !isNan(point)) {
  mark ='Вы не ввели свои балы!';
}
 alert (mark);

=========================================
                                      // Бесконечный ввод пока не введешь stop
for (;;) {
  var input = prompt('Ввод данных');
    if (input === 'stop') {
      break;
    }
  }
=============================================

                                                      // массивы
var arr = [4, 'hi', false, [7, 12]];
alert (arr [3][1]);

arr[7] = 10;
alert (arr);
alert (arr.length);   // длинна массива
alert (arr.indexOf('hi'));   // в каком индексе лежит 'hi'
arr.push ('last'); // добавить элемент 'last' в конец массива
alert (arr);

delete arr[2]; // стереть в массиве элемент под индексом [2] а в обьекте { } удалит этот элемент
alert (arr);

arr.splice (2, 5);  // удалить из массива начиная с элемента под индексом "2" количество элементов равное "5" ( у обьекта нет такой команды)
alert (arr);

var arrSort = [2, 65, 54, 8, 96, 73, 15];
alert (arrSort.sort()); // отсортировать значения элементов массива по алфавиту

arrSort.sort(function(a, b){    // отсортировать значения элементов массива по авозрастанию
  if (a<b) {
    return -1;
  }   else if (a>b) {
      return 1;
  }   else {
      return 0;
  }
})

alert (arrSort);
========================================================
*/                                        // обьекты
var o = {lname: 'Doe', fname: 'Jone', age: 25};

console.log(o);
console.log(o.fname);  // обращение к элементу массива по ключу
console.log(o['fname']); // обращение к тому же элементу массива по ключу способ 2

o.a = {b: { c: { d:{}}}}
console.log(o);
