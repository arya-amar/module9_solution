(function() { //iife 

angular.

  module('MenuApp').     

  component('categories', {  // This name is what AngularJS uses to match to the `categories` element.
    template:  '<br><table><tr><td><a ui-sref="homeState">Home</a></td></tr>'+
                '<tr><td><h3>List of Categories</h3></td></tr>'+
               '<tr ng-repeat="cats in $ctrl.cat">' +
            '<td><a ui-sref="itemState({ catid: cats.short_name })">{{cats.name}}-{{cats.short_name}}</a></td>' +
            '</tr></table>' ,
        styleUrls: ['./css/style.css'],

    controller: 'catController'

    /*function componentController($scope,$state,MenuDataService,) {
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
    }
    */


  });

}()); //end iife