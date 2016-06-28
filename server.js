var express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var cart = require('./serverControllers/cartCtrl');
var orders = require('./serverControllers/orderCtrl');
var users = require('./serverControllers/userCtrl');
