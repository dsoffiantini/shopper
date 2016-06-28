angular.module('shopper').controller('productController', function($scope, $state, $stateParams, ngDialog, productService) {

    $scope.url = $state.href($state.current.name);

    $scope.productName = $stateParams.productID;

    $scope.product;

    $scope.products = productService.getProducts();


    $scope.productGrab = function getProducts() {

        for (var i = 0; i < $scope.products.length; i++) {
            if ($scope.products[i].name === $scope.productName) {
                $scope.product = $scope.products[i];
            }
        }
    }

    $scope.productGrab();

    $scope.tags = [];

    $scope.addTag = function(tag) {
      if ($scope.tags.length === 0) {
        $scope.tags.push(tag)
      }
      else {
        for (var i = 0; i < $scope.tags.length; i++) {
          if ($scope.tags[i] !== tag) {
            $scope.tags.push(tag);
          }
        }
      }
    }

    $scope.relatedProducts = [];

    // $scope.getRelatedProducts = function() {
    //   var related = productService.getCategoryProducts($scope.product.category);
    //   for (var i = 0; i < 10; i++) {
    //     $scope.relatedProducts.push()
    //   }
    //
    // }

    $scope.clickToOpen = function(product) {
      var newScope = $scope.$new();
        newScope.product = product;
          ngDialog.open({
            template: './views/quick-view.html',
            scope: newScope
          });
      };

});
