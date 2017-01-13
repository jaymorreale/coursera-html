(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
 $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  // Categories Page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menuapp/templates/categories.template.html',
    controller: 'CategoriesController as categories',
    resolve: {
       items: ['MenuDataService', function (MenuDataService) {
         return MenuDataService.getMenuCategories();
       }]
     }
  })

  // Items Page
  .state('items', {
    url: '/:cat/:shortName',
    templateUrl: 'src/menuapp/templates/items.template.html',
    controller: 'itemsListController as items',
    params: {
      shortName: "<",
      cat: "<"
    },
    resolve: {
      items: ['$stateParams', 'MenuDataService',
      function  ($stateParams, MenuDataService) {
        return MenuDataService.getItemsForCategory($stateParams.shortName);
      }]
    }
  });
}

})();
