//node_modules requires

var bodyParser = require('body-parser');
var cors = require('cors');
var express = require('express');
var mongoose = require('mongoose');
// var FacebookStrategy = require('passport-facebook').Strategy;
// var passport = require('passport');

//internal requires

// var cart = require('./serverControllers/cartCtrl');
// var orders = require('./serverControllers/orderCtrl');
// var users = require('./serverControllers/userCtrl');

//express setup

var app = express();
app.use(bodyParser.json());
// app.use(express.static('public'));
app.use(cors());

//mongoose setup

// var shopper = mongoose.connect('mongodb://localhost/Shopper');
//
// var product = new Schema({
//   name: String,
//   price: Number,
//   category: String,
//   subcategory: String,
//   description: String,
//   image: Array,
//   featured: Boolean,
//   inStock: Boolean,
// });



var products = [
  {
    name: "Cutout Black One-Piece Bandage",
    price: 24.99,
    category: "Swimwear",
    subcategory: "One Piece",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    additionalinfo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: './images/dummy/Swim/Cutout-Black-One-Piece-Bandage.jpg',
    featured: true
  },
  {
    name: "Color Block One-Piece Swimwear",
    price: 21.99,
    category: "Swimwear",
    subcategory: "One Piece",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    additionalinfo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: './images/dummy/Swim/Color Block One-Piece Swimwear.jpg',
    featured: true
  },
  {
    name: "Lace Overlay One Piece",
    price: 19.99,
    category: "Swimwear",
    subcategory: "One Piece",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    additionalinfo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: './images/dummy/Swim/Lace Overlay One Piece.jpg',
    featured: false
  },
  {
    name: "Blue High-Neck Bikini",
    price: 28.99,
    category: "Swimwear",
    subcategory: "Bikini",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    additionalinfo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: './images/dummy/Swim/Blue High-Neck Bikini.jpg',
    featured: false
  },
  {
    name: "Cutout Black One-Piece Bandage",
    price: 31.99,
    category: "Swimwear",
    subcategory: "One Piece",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: './images/dummy/Swim/Cutout-Black-One-Piece-Bandage.jpg',
    featured: false
  },
  {
    name: "test",
    price: 21.99,
    category: "Swimwear",
    subcategory: "One Piece",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    additionalinfo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: './images/dummy/Swim/Cutout-Black-One-Piece-Bandage.jpg',
    featured: false
  }
]

var cart = [];

var wishlist = [];

var categories = [
  {
  name: "Swimwear",
  subcategories: ["One Piece", "Bikini"]
  }
];

//get products
app.get('/api/products', function(req, res, next) {
  res.status(200).json(products);
})

//get product
app.get('/api/products/:name', function(req, res, next) {
  console.log("got the request")
  var product;
  for (var i = 0; i < products.length; i++) {
    if (req.params.name === products[i].name) {
      var product = products[i];
    }
  }
  res.status(200).json(product);
})

//get categories
app.get('/api/categories', function(req, res, next) {
  res.status(200).json(categories);
})

//get category products
app.get('/api/categories/:id', function(req, res, next) {
  console.log(req.params.id)
  var categoryProducts = [];
  for (var i = 0; i < products.length; i++) {
    if (products[i].category === req.params.id.toString()) {

      categoryProducts.push(products[i])
    }
  }
  res.status(200).json(categoryProducts);
})

// get cart
app.get('/api/cart/:id', function(req, res, next) {
  res.status(200).json(cart);
})


//post product
app.post('/api/products', function(req, res, next) {
  products.push(req.body);
  res.status(200).json(products);
})

//post to cart
app.post('/api/cart/', function(req, res, next) {
  cart.push(req.body);
  res.status(200).json(cart);
})

//post to wishlist
app.post('/api/wishlist', function(req, res, next) {
  wishlist.push(req.body);
  console.log(wishlist)
  res.status(200).json(wishlist);
})

// delete product ---fix
app.delete('/api/products/:id', function(req, res, next) {

})




var port = 8080;
app.listen(port, function() {
  console.log('listening to port',port);
})
