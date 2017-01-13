(function () {
'use strict';

angular.module('MenuApp')
.controller('itemsListController', itemsListController);

itemsListController.$inject = ['items', $stateParams];
function itemsListController(items, $stateParams) {
  var ctrl = this;
  ctrl.items = items.data.menu_items;
  ctrl.cat = $stateParams.cat;
}

})();
