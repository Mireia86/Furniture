
function headerDirective(){
  return{
    restrict: 'AEC',
    templateUrl: './views/header.html'
  };
};

function footerDirective(){
  return{
    restrict: 'AE',
    templateUrl: './views/footer.html'
  };
};

function categoryDirective(){
  return{
    restrict: 'AE',
    templateUrl: './views/categPart.html'
  };
};

function carouselDirective(){
  return{
    restrict: 'AE',
    templateUrl: './templates/home.html'
  };
};

function partnerDirective(){
  return{
    restrict: 'AE',
    templateUrl: './views/indexPartner.html'
  };
};

function linesDirective(){
    return{
      restrict: 'AE',
      replace: true,
      templateUrl: 'views/lines.html'
    };
  };

function modelsDirective(){
		return{
			restrict:"E",
			templateUrl: "views/models.html"
		};
	};	


(function() {
	angular.module('myApp.directive', [])
	.directive('headerDirective', headerDirective)
	.directive('footerDirective', footerDirective)
	.directive('categoryDirective', categoryDirective)
	.directive('carouselDirective', carouselDirective)
	.directive('partnerDirective', partnerDirective)
	.directive('linesDirective', linesDirective)
	.directive('modelsDirective', modelsDirective)
})();

