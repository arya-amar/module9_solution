(function() { //iife 


    var menuapp=angular.module("MenuApp", ['data','ui.router']);  //dat,'ui.router'.module is dependent on MenuApp
    /*
    menuapp.controller("MenuAppController", ['MenuDataService',function($scope, $state,MenuDataService) {
        MenuDataService.getAllCategories();
        $scope.getCategories=function(){
              MenuDataService.getAllCategories();
        }
  
         $scope.getItem = function (itemid) {
             MenuDataService.getItemsForCategories(itemid);

         }

    }]);*/



   




}());//end iife

