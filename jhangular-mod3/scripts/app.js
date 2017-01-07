(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
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
  list.found = [];
  list.searchTerm = "";
  list.error = false;

  list.searchMenuItems = function () {
    list.found.length = 0;  // Clear the Array
    list.error = false;     // Set error to false

    if(list.searchTerm == ""){
      list.error = true;
      return;
    }

    MenuCategoriesService.getMatchedMenuItems(list.searchTerm).then(function (response) {
      list.found = response;
      if(list.found.length == 0)
        list.error = true;
    })
  };

  list.onRemove = function (itemIndex) {
    list.found.splice(itemIndex.index, 1);
  };
}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    var foundItems=[];
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
    }).then(function (response) {
      var menuItems = response.data.menu_items;

      for( var i = 0; i < menuItems.length; i++)
        if(menuItems[i].description.indexOf(searchTerm) != -1)
          foundItems.push(menuItems[i]);
      return foundItems;
    })
    .catch(function (error) {
      console.log(error);
    });
  };
}

})();
