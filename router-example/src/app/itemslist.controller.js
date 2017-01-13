(function () {
'use strict';

angular.module('App')
.controller('itemsListController', itemsListController);

// 'items' is injected through state's resolve
// itemsListController.$inject = ['items', $stateParams];
// function itemsListController(items, $stateParams) {
itemsListController.$inject = ['items', '$state'];
function itemsListController(items, $state) {

  var ctrl = this;
  ctrl.items = items.data.menu_items;
  // ctrl.cat = $stateParams.cat;
  ctrl.cat = $state.params.cat;

}

})();
