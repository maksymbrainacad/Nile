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

var userInputArray = userInput.split(' '); // сщздаем массив из строки разделив по заданному параметру

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
*/

for (var i = 0; i < 10; i++) {
    if (i%2 == 0) {
    console.log(i);
  }
}
