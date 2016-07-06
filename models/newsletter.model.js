var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newsletterSchema = new Schema({
  email: String
});

module.exports = mongoose.model('Newsletter', newsletterSchema);
