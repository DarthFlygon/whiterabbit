var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    email: {type: String, required: true},
    introduction: {type: String},
    phone: {type: String},
    experience: {type: String},
    achievements: {type: String},
    time_stamp: {type: Date, default:Date.now()},
  }
);

module.exports = mongoose.model('User', UserSchema)