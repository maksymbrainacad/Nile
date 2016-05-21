'use strict';

angular.module('components')
  .directive('pagination', function() {
    return {
      restrict: 'EA',
      templateUrl: '/app/scripts/components/pagination/pagination.html',
      scope: {
        pageSize: '=',
        currentPage: '=',
        pagesCount: '=',
        itemsCount: '='
      },
      controller: function($scope) {
        $scope.nextPage = function() {
          $scope.currentPage++;
        };
        $scope.prevPage = function() {
          $scope.currentPage--;
        };

        $scope.goToPage = function() {
          $scope.currentPage = $scope.page - 1;
        }
      },
      link: function(scope) {
        
      }
    };
  });
