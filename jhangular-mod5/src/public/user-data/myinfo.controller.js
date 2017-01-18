(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['UserDataService', 'ApiPath'];
function MyInfoController(UserDataService, ApiPath) {
  var ctrl = this;

  ctrl.user = UserDataService.getUserData();
  ctrl.menuItem = ctrl.user.menuItem;
  ctrl.basePath = ApiPath;
}

})();
