'use strict';

angular.module('components')   // создали в модуле components директиву pagination
  .directive('pagination', function() {
    return {
      restrict: 'EA',    // restrict обязательное поле, описывает что будет в нашей директиве, где искать совпадение с 'pagination'
      templateUrl: '/app/scripts/components/pagination/pagination.html',
      scope: {              // получаем данные из pagination в хтмл, = - ссылка на переменную из хтмл
        pageSize: '=',
        currentPage: '=',
        pagesCount: '=',
        itemsCount: '='
      },
      controller: function($scope) {
        $scope.prevPage = function() {  // пролистываем страницы с пользователями назад
          $scope.currentPage--;
        };
        $scope.nextPage = function() {  // пролистываем страницы с пользователями вперед
          $scope.currentPage++;

        };
        $scope.goToPage = function() {   // переходим на страницу которуюю ввел пользователь
          if (+$scope.page - 1 < $scope.pagesCount) {
            $scope.currentPage = +$scope.page - 1;
          } else {
            alert('Нет такой страницы!')
          }
        }
      },
      link: function(scope) { // описываем логику для линков; принимаем scope, element, atribute
        console.log(scope.pageSize, scope.currentPage);
      }
    };
  });


  // restrict: значения
  // Е - элемнт;
  // А - атрибут;
  // С - коментарий или класс - плохая практика

// при создании тега название тега пишется маленькими буквами через дефис Пример <input-select>
// при описании его в .directive('inputSelect') - пишем его название кэмел-кейсом
// ОБЯЗАТЕЛЬНО - ТАКОЙ СИНТАКСИС
