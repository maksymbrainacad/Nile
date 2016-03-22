                                                                //   formSelect.html
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
