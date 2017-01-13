(function () {
'use strict';

angular.module('MenuApp')
.component('categoryList', {
  templateUrl: 'src/MenuApp/templates/categorylist.template.html',
  bindings: {
    items: '<'
  }
});

})();
