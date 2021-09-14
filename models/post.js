var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PostSchema = new Schema(
  {
    //Content
    title: {type: String, required: true, max: 300},
    description: {type: String, required: true, max: 1000},
    time_stamp: {type: Date, default:Date.now()},
  }
);

module.exports = mongoose.model('Post', PostSchema)