(function () {
'use strict';

angular.module('Data')
.service('DataService', DataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

DataService.$inject = ['$http', 'ApiBasePath'];
function DataService($http, ApiBasePath) {
  var service = this;

  service.getCategories = function () {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    });
    return response;
  };


  service.getItemsForCategory = function (shortName) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {
        category: shortName
      }
    });

    return response;
  };

}

})();
