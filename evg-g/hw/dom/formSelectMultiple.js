                                                                //   formSelect.html
window.addEventListener('load', function() {                    /// ловим данные с форм ввода на странице
  document.getElementById('mainForm')                           /// обрабатываем данные
    mainForm.addEventListener('submit', function(e) {           /// возвращаем результат на страницу
      console.log('submit');
      var select = mainForm.elements.operands,            //подключаемся к элементам selecta
          operation = mainForm.operation.value,
          operands = [],
          leng = select.options.length,
          i = 0;

      for (; i < leng; i++) {            // сформировали массив выбранных операндов
        var option = select.options[i];
        if (option.selected) {
          operands.push(+select.options[i].value);
        }
      }

      i = 0;

      var operandsLength = operands.length - 1,
          result = operands[0];

      switch (operation) {
        case '+':
          for(; i < operandsLength; i++) {
            result += operands[ (i + 1) ];
          }
          break;

        case '-':
          for(; i < operandsLength; i++) {
            result -= operands[ (i + 1) ];
          }
          break;

        case '*':
          for(; i < operandsLength; i++) {
            result *= operands[ (i + 1) ];
          }
          break;

        case '/':
          for(; i < operandsLength; i++) {
            result /= operands[ (i + 1) ];
          }
          break;
      }

          document.querySelector('[data-id="result"]').innerHTML = result; //.innerHTML вписывает result во внутрь HTML блок с data-id="result

      e.preventDefault();
      return false;
    });
});
