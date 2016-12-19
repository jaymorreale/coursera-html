(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {

    $scope.countDishes = function () {
      var arrayOfStrings = $scope.dishes.split(',');
      var results = "Enjoy!";
      if(arrayOfStrings[0] == "")
        results = "Please enter data first";
      else if(arrayOfStrings.length > 3)
        results = "Too Much!";
      $scope.mymessage = results;
    };

  }

})();
