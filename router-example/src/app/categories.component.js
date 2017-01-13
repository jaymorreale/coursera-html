(function () {
'use strict';

// The component loads the associated templateUrl when it is invoked
//  from html using <category-list> items="xxx" </category-list>
//  the component attribute "items" is available to the templateUrl
//  as a default $ctrl
angular.module('App').component('categoryList', {
  templateUrl: 'src/app/templates/categorylist.template.html',
  bindings: {
    items: '<'
  }
});

})();
