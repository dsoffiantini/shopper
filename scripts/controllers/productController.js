angular.module('shopper').controller('productController', function($scope, $state, $stateParams, ngDialog, productService, wishlistService) {

    $scope.url = $state.href($state.current.name);

    $scope.productName = $stateParams.productID;


    productService.getProduct($stateParams.productID).then(function(product) {
      $scope.product = product;
      productService.getCategoryProducts(product.category).then(function(categoryProducts) {
          $scope.relatedProducts = categoryProducts;
        })
    })






    // $scope.getProducts = function() {
    //     productService.getProducts().then(function(products) {
    //       for (var i = 0; i < products.length; i++) {
    //           if (products[i].name === $scope.productName) {
    //               $scope.product = $scope.products[i];
    //           }
    //       }
    //     });
    // }
    //
    // $scope.getProducts();


    // $scope.productGrab = function getProducts() {
    //
    //     for (var i = 0; i < $scope.products.length; i++) {
    //         if ($scope.products[i].name === $scope.productName) {
    //             $scope.product = $scope.products[i];
    //         }
    //     }
    // }
    //
    // $scope.productGrab();

    $scope.tags = [];

    $scope.addTag = function(tag) {
        if ($scope.tags.length === 0) {
            $scope.tags.push(tag);
        } else if ($scope.tags.indexOf(tag) === -1) {
            $scope.tags.push(tag);
        }
    }



    $scope.clickToOpen = function(product) {
        var newScope = $scope.$new();
        newScope.product = product;
        ngDialog.open({
            template: './views/quick-view.html',
            scope: newScope
        });
    };

    $scope.addToWishlist = function() {
        wishlistService.addToWishlist($scope.product.data);
    };

});
