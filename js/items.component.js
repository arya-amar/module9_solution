(function() { //iife 

angular.

  module('MenuApp').     

  component('items', {  // This name is what AngularJS uses to match to the `categories` element.
    template: '<br><table> <tr><td><a ui-sref="homeState">Home</a></td></tr>'+
              '<tr><td><h3>Items for Category {{$ctrl.id}}</h3></td></tr>'+
              '<tr ng-repeat="anitem in $ctrl.items">' +
            '<td>{{anitem.name}}</td>' +
          '</tr></table>' ,
    styleUrls: ['./css/style.css'],
    controller:'itemController'

    /*
    controller: function componentController($scope,$state,$stateParams,MenuDataService,) {
      var catid = $stateParams.catid;
      this.id=catid;
      console.log("catid in item.component="+catid);
      this.msg="mymsg";
      this.items=[];
      promise=MenuDataService.getItemsForCategories(this.id).then(function(resp) {
         console.log("catid="+catid);
         return resp;

      });
      promise.then((data)=>{
           
           //console.log(Object.keys(data));
           alldata=data["data"];
           allitems=alldata["menu_items"];
           for (var i=0;i<allitems.length;i++){
               this.items.push(allitems[i]);
           }
            
           //console.log("category in controller");
           //console.log(allcategories);
 

  
           //console.log(test);

        }, (error)=>{
           console.log("Promise rejected with " + JSON.stringify(error));
        }); //end promise

      console.log("item after function");
      console.log(this.items);
    }*/

});

}());//end iife