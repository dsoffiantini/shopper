angular.module("shopper").service("productService", function() {

  var products = [
    {
      name: "Cutout Black One-Piece Bandage",
      price: 24.99,
      category: "Swimwear",
      image: './images/dummy/Swim/Cutout-Black-One-Piece-Bandage.jpg',
      featured: true
    },
    {
      name: "Cutout Black One-Piece Bandage",
      price: 21.99,
      category: "Swimwear",
      image: './images/dummy/Swim/Cutout-Black-One-Piece-Bandage.jpg',
      featured: true
    },
    {
      name: "Cutout Black One-Piece Bandage",
      price: 21.99,
      category: "Swimwear",
      image: './images/dummy/Swim/Cutout-Black-One-Piece-Bandage.jpg',
      featured: false
    },
    {
      name: "Cutout Black One-Piece Bandage",
      price: 21.99,
      category: "Swimwear",
      image: './images/dummy/Swim/Cutout-Black-One-Piece-Bandage.jpg',
      featured: false
    },
    {
      name: "Cutout Black One-Piece Bandage",
      price: 21.99,
      category: "Swimwear",
      image: './images/dummy/Swim/Cutout-Black-One-Piece-Bandage.jpg',
      featured: false
    },
    {
      name: "Cutout Black One-Piece Bandage",
      price: 21.99,
      category: "Swimwear",
      image: './images/dummy/Swim/Cutout-Black-One-Piece-Bandage.jpg',
      featured: false
    }
  ]

  this.getProducts = function() {
    return products;
  }

  this.getCategoryProducts = function(category) {
    var categoryProducts = [];
    for (var i = 0; i < products.length; i++) {
      if (products[i].category === category) {
        categoryProducts.push(products[i])
      }
    }
    return categoryProducts;
  }

});
