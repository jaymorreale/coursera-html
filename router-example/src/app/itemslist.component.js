(function () {
'use strict';

angular.module('App')
.component('itemsList', {
  templateUrl: 'src/app/templates/itemslist.template.html',
  bindings: {
    items: '<',
  }
});

})();
