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
            .state('category', {
                url: '/category/:category',
                templateUrl: './views/categories.html',
                controller: 'categoryController'
            })
            .state('cart', {
                url: '/cart',
                templateUrl: './views/cart.html',
                controller: 'cartController'
            })
            .state('brand', {
                url: '/brand/:brand',
                templateUrl: './views/categories.html',
                controller: 'categoryController'
            })
            .state('admin', {
                url: '/admin',
                templateUrl: './views/admin.html',
                controller: 'adminController'
            })
            .state('admin.addProduct', {
                url: '/add',
                templateUrl: './views/add-product.html',
                controller: 'adminController'
            })
            .state('admin.deleteProduct', {
                url: '/delete',
                templateUrl: './views/delete-product.html',
                controller: 'adminController'
            })
            .state('home.quickView', {
                url: 'quick-view',
                templateUrl: './views/quick-view.html',
                controller: 'quickViewController'
            })

    });
