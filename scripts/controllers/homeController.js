angular.module('shopper').controller('homeController', function($scope, ngDialog, brandService, productService) {

  $scope.test = "test";

  $scope.products = productService.getProducts();

  $scope.brands = brandService.getBrands();





  $scope.clickToOpen = function(product) {
    var newScope = $scope.$new();
      newScope.product = product;
        ngDialog.open({
          template: './views/quick-view.html',
          scope: newScope
        });
    };


});
