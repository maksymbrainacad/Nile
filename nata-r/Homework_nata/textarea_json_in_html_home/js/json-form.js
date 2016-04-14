window.addEventListener('load', function() {

  var jsonFormNode = document.querySelector('[data-id="json-form"]'),
      jsonTextareaNode = document.querySelector('[data-id="json-textarea"]');

      jsonFormNode.addEventListener('submit', function(e) {

        var jsonText= jsonTextareaNode.value,
            json;
        try{
            json = JSON.parse(jsonText); //делаем из строки обьект
            console.log(json);
             } catch (e) {
          console.log("error");
        }

          if(json) {
            var html = '';

            json.forEach(function(item) {
              if (item.type === "text" ||item.type === "textarea" ){
              //html +='<input type="' + value.type + '" />"'
              html += ['<input ',
                          ' type = "', item.type, '"',
                          ' name = "', item.name, '"',
                          ' placeholder = "', item.placeholder, '"',
                                        ' />'].join('');
             } else if (item.type === "select") {
                var option = '';
               for (var key in item.option){
                  option += "<option value=" + key  + ">" + item.option[key] + "</option>"
                }
                html += ['<', item.type,
                           ' name = "', item.name, '"',
                           ' >', item.value, option ,
                          '</',item.type,'/>'].join('');
             }

            })

            document.querySelector('[data-id="form-preview"]').innerHTML = html;

          }


        e.preventDefault();
        e.stopPropagation();
        return false;
      })
})
