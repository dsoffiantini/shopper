angular.module('shopper').controller('homeController', function($scope, ngDialog, brandService, productService) {

    $scope.test = "test";

    // $scope.products = productService.getProducts();


    function slick() {
      $('.products-container').slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: false,
            arrows: true,
            prevArrow: '.btn-prev',
            nextArrow: '.btn-next',
            autoplay: true,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    dots: false,
                    arrows: false,
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                    arrows: false,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        })
    }

    $scope.brands = brandService.getBrands();


    $scope.getProducts = function() {
        productService.getProducts().then(function(products) {
            $scope.products = products;
            slick();
        });
    }

    $scope.getProducts();

    $scope.getMoreProducts = function() {
      productService.getCategoryProducts("Clothing").then(function(products) {
        $scope.moreProducts = products;
      })
    }

    $scope.getMoreProducts();

    $scope.getEvenMoreProducts = function() {
      productService.getCategoryProducts("Accessories").then(function(products) {
        $scope.evenMoreProducts = products;
      })
    }

    $scope.getEvenMoreProducts();


    $scope.clickToOpen = function(product) {
        var newScope = $scope.$new();
        newScope.product = product;
        ngDialog.open({
            template: './views/quick-view.html',
            scope: newScope
        });
    };


});
