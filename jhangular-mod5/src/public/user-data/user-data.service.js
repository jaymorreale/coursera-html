(function () {
"use strict";

angular.module('public')
.service('UserDataService', UserDataService);

function UserDataService() {
  var serv = this;
  serv.user = {};

  serv.updateUserData = function(user) {
    serv.user.firstname = user.firstname;
    serv.user.lastname = user.lastname;
    serv.user.email = user.email;
    serv.user.phone = user.phone;
    serv.user.favorite = user.favorite;
    serv.user.menuItem = user.menuItem;
  }

  serv.getUserData = function() {
    return this.user;
  }

}

})();
