(function() { //iife 

angular.

  module('data')
.factory('MenuDataService', function($http) {   //service for app named data where the variable is called dataapp
  var svc = {
  
     categorysvc:[],

     getAllCategories:  function (catid) {
         
        this.category=[];
        const url="https://davids-restaurant.herokuapp.com/categories.json";
        //const promise = this.httpClient.get(url).toPromise();

        console.log("got to menu data service"); 

        
        
        const promise=$http({method: 'GET',url,Accept: 'application/json'}); //http returns a promise

        return promise;
        


       
      },  //end getAllCategories

      getItemsForCategories:function(categoryid){
        console.log("categoryid in getItemsforCategories="+categoryid);
        const url="https://davids-restaurant.herokuapp.com/menu_items.json?category="+categoryid;
        

            
        
        const promise=$http({method: 'GET',url,Accept: 'application/json'}); //http returns a promise
        console.log("promise in getItemsforCategories");
        console.log(promise);

        return promise;

      }

    };//end of var serivce

    return svc;
  });

}());//end iife