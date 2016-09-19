var icons = "data/logos.json"
var url = "data/lines.json"

function carouselController($scope){
  var Item = function(name, image, text, active){
    this.name=name,
    this.image=image,
    this.text=text,
    this.active=active
  } 
   $scope.myInterval = 3000;
    $scope.slides=[

      element1 = new Item ("Foto1", "img/uno.jpg", "jdlfgsduigh", "active"),
      element2 = new Item ("Foto2", "img/dos.jpg", "sjhdglfdug", ""),
      element3 = new Item ("Foto3", "img/cinco.jpg", "nldifusghei", ""),
      element4 = new Item ("Foto4", "img/seis.jpg", "njhdgkfshj", "")
    ];

};



function indexController($scope, $http){
     $http.get(url).then(function(res){
      $scope.lines=res.data;
    });
 
     $http.get(icons).then(function(response) {
       $scope.logos=response.data
     });
   }
   
var findBand = function(array,id){
  for(var i = 0, m = null ; i<array.length ; ++i){
    if(array[i].id == id){
        return array[i];
        break;
      };
    };
};

 function categoryController ($scope,$routeParams,$http){
     
  $http.get(url).then(function(res){
      var Id = $routeParams.lineId;
      var lines = res.data;
      $scope.line = findBand(lines,Id)
      })
      } 
       

(function() {
   angular.module('myApp.controller', [])
   .controller('carouselController', carouselController)
   .controller('indexController', indexController)
   .controller('categoryController', categoryController)
})();





  