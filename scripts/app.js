angular.module("shopper", ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: './views/home.html',
                controller: 'homeController'
            })
            .state('product', {
                url: '/product/:productID',
                templateUrl: './views/product.html',
                controller: 'productController'
            })

    });
