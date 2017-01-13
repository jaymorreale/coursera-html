(function () {
'use strict';

angular.module('App')
.component('itemsList', {
  templateUrl: 'src/App/templates/itemslist.template.html',
  bindings: {
    items: '<',
  }
});

})();
