window.addEventListener('load', function() {
  var jsonFormNode = document.querySelector('[data-id="json-form"]'),
      jsonTextareaNode = document.querySelector('[data-id="json-textarea"]');


  jsonFormNode.addEventListener('submit', function(e) {
    var jsonText = jsonTextareaNode.value,
        json;

    try {
      json = JSON.parse(jsonText);
    } catch (e) {
      console.error(e);
    }

    console.log(json);

    if (json) {
      var html = '';

      json.forEach(function(item) {            // forEach еще один новый способ пройти по циклу по новому стандарту
        // html += '<input type="' + value.type + '"/>';
         html += ['<input',                       //способ записи формирования ХТМЛ строки для вывода инпута
                    ' type="', item.type,'"',
                    ' name="', item.name,'"',
                    ' placeholder="', item.placeholder,'"',
                  ' />'].join('');
      });

      document.querySelector('[data-id="form-preview"]').innerHTML = html;
    }

    e.preventDefault();
    e.stopPropagation();
    return false;
  });
});
