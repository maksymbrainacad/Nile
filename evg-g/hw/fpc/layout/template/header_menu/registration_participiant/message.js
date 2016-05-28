;(function() {

  var showMessage = function(messageFor) {             //  ---- функция показывает скрытое сообщение пользователю, принимает селектор для какого поля отобразить сообщение: '[data-id="..."]'
    var messageForNode = document.querySelector(messageFor),
        messageForNodeClass = messageForNode.className,
        newClass = TamperingClass.changeClass("hidden", "show", messageForNodeClass);

      messageForNode.className = newClass;
  };

  var hiddenMessage = function(messageFor) {             //  ---- функция скрывает сообщение показанное пользователю, принимает селектор для какого поля скрываем сообщение: '[data-id="..."]'
    var messageForNode = document.querySelector(messageFor),
        messageForNodeClass = messageForNode.className,
        newClass = TamperingClass.changeClass("show", "hidden", messageForNodeClass);

      messageForNode.className = newClass;
  };


  window.Message = {
    show: showMessage,
    hidden: hiddenMessage
  };
})();


var timeShowMessage = function(counterMessage, messageFor) {  // функция  показывает и скрывает сообщение пользователю за определенное время
  Message.show(messageFor, counterMessage);
  counterMessage = ++counterMessage;

  setTimeout(Message.hidden(messageFor, counterMessage), counterMessage * 5 * 1000);
  counterMessage = --counterMessage;

};
