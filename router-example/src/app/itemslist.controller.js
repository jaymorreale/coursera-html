(function () {
'use strict';

angular.module('App')
.controller('itemsListController', itemsListController);

// 'items' is injected through state's resolve
itemsListController.$inject = ['items', $stateParams];
function itemsListController(items, $stateParams) {
  var ctrl = this;
  ctrl.items = items.data.menu_items;
  ctrl.cat = $stateParams.cat;
}

})();
