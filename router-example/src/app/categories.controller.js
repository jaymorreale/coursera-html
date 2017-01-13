(function () {
'use strict';

angular.module('App')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['items'];
function CategoriesController(items) {
  var categories = this;
  categories.items = items.data;
}

})();
