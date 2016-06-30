var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
// var passport = require('passport');
// var FacebookStrategy = require('passport-facebook').Strategy;
// var cart = require('./serverControllers/cartCtrl');
// var orders = require('./serverControllers/orderCtrl');
// var users = require('./serverControllers/userCtrl');


var app = express();
app.use(bodyParser.json());
app.use(express.static('public'));


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
    name: "Cutout Black One-Piece Bandage",
    price: 21.99,
    category: "Swimwear",
    subcategory: "One Piece",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    additionalinfo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: './images/dummy/Swim/Cutout-Black-One-Piece-Bandage.jpg',
    featured: false
  }
]

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

//get categories
app.get('/api/categories', function(req, res, next) {
  res.status(200).json(categories)
})

//get cart
// app.get('/api/cart/:id', function(req, res, next) {

// })



var port = 3000;
app.listen(port, function() {
  console.log('listening to port',port);
})
