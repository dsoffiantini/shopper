angular.module("shopper").controller("indexController", function($scope, userService, newsletterService, productService, cartService) {

  $scope.getUser = function() {
      userService.createCart().then(function(user) {
        cartService.getCart(user._id).then(function(cart) {
            $scope.cart = cart.items;
        });
      })
  }

  $scope.getUser();


  $scope.getCategories = function() {
    productService.getCategories().then(function(categories) {
      $scope.categories = categories;
    });
  }
  $scope.getCategories();



  $scope.submitEmail = function(email) {
    newsletterService.newsletterSignup(email);
  }

  $scope.search = function(searchText) {
    productService.searchProducts(searchText).then(function(results) {
      $scope.searchResults = results;
      console.log(results);
    })
  }



})
