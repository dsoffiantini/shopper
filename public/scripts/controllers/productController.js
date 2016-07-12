angular.module('shopper').controller('productController', function($scope, $state, $stateParams, ngDialog, userService, cartService, productService, wishlistService) {

    $scope.url = $state.href($state.current.name);

    $scope.relatedProducts;

    $scope.getProduct = function() {
      productService.getProduct($stateParams.productID).then(function(product) {
        $scope.product = product;

        $scope.thenGetCategoryProducts = function() {
          productService.getCategoryProducts(product.category).then(function(categoryProducts) {
            $scope.relatedProducts = categoryProducts;
          })
        }
        $scope.thenGetCategoryProducts();
      })
    }
    $scope.getProduct();

    $scope.addToCart = function(product) {
        cartService.addToCart(product)
    }


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

    $scope.clickToOpenImage = function(product) {
        var newScope = $scope.$new();
        newScope.product = product;
        ngDialog.open({
            template: './views/product-zoom.html',
            scope: newScope
        });
    };

    $scope.addToWishlist = function() {
        wishlistService.addToWishlist($scope.product.data);
    };

});
