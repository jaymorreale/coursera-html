(function () {
"use strict";

angular.module('public')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['$scope', 'MenuService', 'UserDataService'];
function RegistrationController($scope, MenuService, UserDataService) {
  var regCtrl = this;
  $scope.regCtrl = regCtrl;
  regCtrl.user = {};
  regCtrl.user.menuItem = {};
  regCtrl.completed = false;  // success indicator

 regCtrl.submit = function() {
   MenuService.getItem(regCtrl.user.favorite)
    .then(function (response) {
      var regCtrl = $scope.regCtrl;
      regCtrl.invalidFav = false;
      regCtrl.user.menuItem = response.data;
      UserDataService.updateUserData(regCtrl.user);
      regCtrl.completed = true;
      console.log(response.data);
    })
    .catch(function (error) {
      var regCtrl = $scope.regCtrl;
      regCtrl.invalidFav = true;
      regCtrl.user.menuItem = {};
      console.log(error);
    })
}

}

})();
