(function() { //iife 

angular.
  module('MenuApp').     
    controller('catController', function($scope, $state, MenuDataService) {
    //controller: function catController($scope,$state,MenuDataService,) {
      this.msg="mymsg";
      this.cat=[];
      promise=MenuDataService.getAllCategories().then(function(resp) {
         return resp;
      });
      promise.then((data)=>{
           
           //console.log(Object.keys(data));
           allcategories=data["data"];  //dictionary contains {data: [list of dictionaries of items]}
           for (var i=0;i<allcategories.length;i++){
               this.cat.push(allcategories[i]);
           }
            
            
           //console.log("category in controller");
           //console.log(allcategories);
 

  
           //console.log(test);

        }, (error)=>{
           console.log("Promise rejected with " + JSON.stringify(error));
        }); //end promise

      console.log("cat after function");
      console.log(this.cat);
    

  })


}());//end iife