(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItems);


function FoundItems() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      list: '<myList',
      onRemove: '&'
    }
   };
   return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuCategoriesService) {
  var list = this;
  list.searchTerm = "";

  list.searchMenuItems = function () {
    list.error = false;

    if(list.searchTerm == ""){
      list.error = true;
      return;
    }

    var promise = MenuCategoriesService.getMatchedMenuItems();

    promise.then(function (response) {
      list.found = [];
      var menuItems = response.data.menu_items;

      for( var i = 0; i < menuItems.length; i++)
        if(menuItems[i].description.indexOf(list.searchTerm) != -1)
          list.found.push(menuItems[i]);

      if(list.found.length == 0)
        list.error = true;
    })
    .catch(function (error) {
      console.log(error);
    })
  };

  list.onRemove = function (itemIndex) {
    list.found.splice(itemIndex.index, 1);
  };
}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function () {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
    });
    return response;
  };
}

})();
