angular.module('shopper').controller('homeController', function($scope, ngDialog, brandService, productService) {

    $scope.test = "test";

    // $scope.products = productService.getProducts();

    $scope.brands = brandService.getBrands();


    $scope.getProducts = function() {
        productService.getProducts().then(function(products) {
            $scope.products = products;
        });
    }

    $scope.getProducts();


    $scope.clickToOpen = function(product) {
        var newScope = $scope.$new();
        newScope.product = product;
        ngDialog.open({
            template: './views/quick-view.html',
            scope: newScope
        });
    };


});
