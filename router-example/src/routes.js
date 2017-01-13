(function () {
'use strict';

angular.module('App').config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
 $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/app/templates/home.template.html'
  })

  // Categories Page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/app/templates/categories.template.html',
    controller: 'CategoriesController as categories',
    resolve: {
       items: ['DataService', function (DataService) {
         return DataService.getCategories();
       }]
     }
  })

  .state('items', {
    url: '/items/:cat/:shortName',
    // url: '/items/{shortName}',
    templateUrl: 'src/app/templates/items.template.html',
    controller: 'itemsListController as items',
    params: {
      shortName: "<",
      cat: "<"
    },
    resolve: {
      items: ['$stateParams', 'DataService',
      function  ($stateParams, DataService) {
        return DataService.getItemsForCategory($stateParams.shortName);
      }]
    }
  })
  //   // params: {
  //   //   shortName: "<",
  //   //   longName: "<"
  //   // },

}
})();
