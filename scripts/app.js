var findBand = function(array,id){
  for(var i = 0, m = null ; i<array.length ; ++i){
    if(array[i].id == id){
        return array[i];
        break;
      };
    };
};

function setConfig($routeProvider) {
        $routeProvider
      //rutas:
        .when('/',{ 
          templateUrl:"templates/home.html",
          controller:"indexController",
          controllerAs:"home"
        })
        .when('/showCateg/:lineId',{ 
          controller:"categoryController",
          templateUrl:"templates/category.html",
          controllerAs:"category"
        }) 
           
     }

(function(){
  var data = "data/lines.json";
  var icons = "data/logos.json";

  var app = angular.module('myApp',['ngRoute', 'myApp.controller', 'myApp.directive']);
  app.config(['$routeProvider', setConfig]);
  
  


})();