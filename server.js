//node_modules requires

var bodyParser = require('body-parser');
var cors = require('cors');
var express = require('express');
var FacebookStrategy = require('passport-facebook').Strategy;
var mongoose = require('mongoose');
var passport = require('passport');
var session = require('express-session');


//models

var Product = require('./models/products.model');
var Cart = require('./models/cart.model');
var Category = require('./models/categories.model');
var Newsletter = require('./models/newsletter.model');


//secret
var Secret = require('./secrets/secret');

//mongoose setup

mongoose.connect("mongodb://localhost/shopper");

//express setup

var app = express();
app.use(session({
  secret: Secret,
  resave: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
// app.use(express.static('public'));
app.use(cors());

//create cart
Cart.create(function (err, cart) {
  var newCart = new Cart(session.id);
  newCart.save();
})

//get session
app.get('/api/session', function(req, res, next) {
  res.status(200).json(req.session.id);
})

//get products
app.get('/api/products', function(req, res, next) {
  Product.find(function(err, products) {
    if(err) {
      console.log("ERROR")
    } else {
      res.status(200).json(products)
    }
  })
})

//get product

app.get('/api/products/:id', function(req, res, next) {
  Product.findById(req.params.id, function(err, product) {
    if(err) {
      console.log("ERROR")
    } else {
      res.status(200).json(product)
    }
  })
})



//get categories
app.get('/api/categories', function(req, res, next) {
  Category.find(function(err, categories) {
    if(err) {
      console.log("ERROR")
    } else {
      res.status(200).json(categories)
    }
  })
})

//get category products
app.get('/api/categories/:id', function(req, res, next) {
  Product.find({category: req.params.id}, function(err, category) {
    if(err) {
      console.log("ERROR")
    } else {
      res.status(200).json(category)
    }
  })
})

// get cart
app.get('/api/cart/:id', function(req, res, next) {
  Cart.findById(req.params.id, function(err, cart) {
    if(err) {
      console.log(err)
    } else {
      res.status(200).json(cart)
    }
  })
})


// post product
app.post('/api/products', function(req, res, next) {
  Product.create(function (err, products) {
    var newProduct = new Product(req.body)
    newProduct.save(function(err, s) {
      if(err) {
          console.log(err)
      } else {
        res.status(200).json(s);
      }
    })
  })
})

//post to cart
app.post('/api/cart/:id', function(req, res, next) {
  Cart.create(req.body, function (err, cart) {
    if(err) {
      console.log("ERROR")
    } else {
      res.status(200).json(cart)
    }
  })
})

//post to wishlist
app.post('/api/wishlist/:id', function(req, res, next) {
  wishlist.push(req.body);
  console.log(wishlist)
  res.status(200).json(wishlist);
})

// delete product
app.delete('/api/products/:id', function(req, res, next) {
  Product.findByIdAndRemove(req.params.id, function (err, products) {
    if(err) {
      console.log("ERROR")
    } else {
      res.status(200).json(products)
    }
  })
})

//get newsletter
app.get('/api/newsletter', function(req, res, next) {
  Newsletter.find(function(err, newsletter) {
    if(err) {
      console.log("ERROR")
    } else {
      res.status(200).json(newsletter)
    }
  })
})


// add newsletter subscriber
app.post('/api/newsletter', function(req, res, next) {
  Newsletter.create(function (err, newsletter) {
    var newEmail = new Newsletter(req.body)
    newEmail.save(function(err, s) {
      if(err) {
          console.log(err)
      } else {
        res.status(200).json(s);
      }
    })
  })
})



var port = 8080;
app.listen(port, function() {
  console.log('listening to port',port);
})
