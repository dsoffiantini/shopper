angular.module("shopper").service("productService", function($http, $q) {

  // var categories = [
  //   {
  //   name: "Swimwear",
  //   subcategories: ["One Piece", "Bikini"]
  //   }
  // ];
  //
  // var products = [
  //   {
  //     name: "Cutout Black One-Piece Bandage",
  //     price: 24.99,
  //     category: "Swimwear",
  //     subcategory: "One Piece",
  //     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //     additionalinfo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //     image: './images/dummy/Swim/Cutout-Black-One-Piece-Bandage.jpg',
  //     featured: true
  //   },
  //   {
  //     name: "Color Block One-Piece Swimwear",
  //     price: 21.99,
  //     category: "Swimwear",
  //     subcategory: "One Piece",
  //     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //     additionalinfo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //     image: './images/dummy/Swim/Color Block One-Piece Swimwear.jpg',
  //     featured: true
  //   },
  //   {
  //     name: "Lace Overlay One Piece",
  //     price: 19.99,
  //     category: "Swimwear",
  //     subcategory: "One Piece",
  //     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //     additionalinfo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //     image: './images/dummy/Swim/Lace Overlay One Piece.jpg',
  //     featured: false
  //   },
  //   {
  //     name: "Blue High-Neck Bikini",
  //     price: 28.99,
  //     category: "Swimwear",
  //     subcategory: "Bikini",
  //     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //     additionalinfo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //     image: './images/dummy/Swim/Blue High-Neck Bikini.jpg',
  //     featured: false
  //   },
  //   {
  //     name: "Cutout Black One-Piece Bandage",
  //     price: 31.99,
  //     category: "Swimwear",
  //     subcategory: "One Piece",
  //     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //     image: './images/dummy/Swim/Cutout-Black-One-Piece-Bandage.jpg',
  //     featured: false
  //   },
  //   {
  //     name: "Cutout Black One-Piece Bandage",
  //     price: 21.99,
  //     category: "Swimwear",
  //     subcategory: "One Piece",
  //     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //     additionalinfo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //     image: './images/dummy/Swim/Cutout-Black-One-Piece-Bandage.jpg',
  //     featured: false
  //   }
  // ]
  //
  // this.getCategories = function() {
  //   return categories;
  // }
  //
  // this.getProducts = function() {
  //   return products;
  // }

  this.getProducts = function() {
    return $http({
      method: 'GET',
      url: '//localhost:8080/api/products'
    }).then(function(response) {
      return response.data;
    }, function(err) {
      console.log(err);
    })
  }

  this.getProduct = function(name) {
    return $http({
      method: 'GET',
      url: '//localhost:8080/api/products/' + name
    }).then(function(response) {
      return response.data;
    }, function(err) {
      console.log(err);
    })
  }

  this.getCategories = function() {
    return $http({
      method: 'GET',
      url: '//localhost:8080/api/categories'
    }).then(function(response) {
      return response.data;
    }, function(err) {
      console.log(err);
    })
  }

  this.getCategoryProducts = function(category) {
    return $http({
      method: 'GET',
      url: '//localhost:8080/api/categories/' + category
    }).then(function(response) {
      return response.data;
    }, function(err) {
      console.log(err);
    })

    // var categoryProducts = [];
    // for (var i = 0; i < products.length; i++) {
    //   if (products[i].category === category) {
    //     categoryProducts.push(products[i])
    //   }
    // }
  //   return categoryProducts;
  }

});
