angular.module("shopper").controller("categoryController", function($scope, $state, $stateParams, productService) {

  $scope.category = $stateParams.category;

    $scope.getCategoryProducts = function() {
      productService.getCategoryProducts($stateParams.category).then(function(categoryProducts) {
        $scope.categoryProducts = categoryProducts.reverse();
        $scope.length = categoryProducts.length;
        $scope.maxPrice = 0;
        $scope.findMaxPrice = function() {
            for (var i = 0; i < $scope.categoryProducts.length; i++) {
                if ($scope.categoryProducts[i].price > $scope.maxPrice) {
                    $scope.maxPrice = Math.ceil($scope.categoryProducts[i].price);
                }
            }
        }
        $scope.findMaxPrice();
      })
    }

    $scope.getCategoryProducts();

    $scope.sortBy = "name";

    $scope.minPrice = 0;

//
//
//
//

    //
    // $scope.findMinPrice = function() {
    //     $scope.minPrice = $scope.categoryProducts[0].price;
    //     for (var i = 0; i < $scope.categoryProducts.length; i++) {
    //         if ($scope.categoryProducts[i].price < $scope.minPrice) {
    //             $scope.minPrice = Math.floor($scope.categoryProducts[i].price);
    //             //math.floor not working?
    //         }
    //     }
    // }



// $scope.findMinPrice();

});
