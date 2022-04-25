(function() { //iife 

/*angular.module('MenuApp')
.config(function($stateProvider) {
  var catState = {
    name: 'Category',
    url: '/categories',
    component: 'categories',
    resolve: {
     cat: function(MenuDataService) {
      return MenuDataService.getAllCategories();
     }
    }
  }

  var homeState = {
    name: 'Home',
    url: '/home',
    //templateUrl: 'index.html'
    template:"this is a test homestate"
  }
  var aboutState = {
    name: 'about',
    url: '/about',
    template: '<h3>Its the UI-Router hello world app!</h3>'
  }

  $stateProvider.state(catState);
  $stateProvider.state(homeState);
  $stateProvider.state(aboutState);
});*/

//var app = angular.module('MenuApp', ['ui.router']);
angular.module("MenuApp")

.config(function($stateProvider, $locationProvider,$urlRouterProvider)
{
    $urlRouterProvider.otherwise("/home");

  $stateProvider
    .state('itemState', {
      url: "/items:catid",
      component: "items"
    })
    .state('homeState', {
      url: "/home",
      templateUrl: "home.html"
    })
    .state('catState', {
      url: "/categories",
      component: "categories"
      //controller: "catController"
    });
});

}());//end iife