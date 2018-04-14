const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
  username: String,
  password: { type: String, select: false }, // To not show/send through api call
  firstName: String,
  lastName: String,
});
User.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', User);
