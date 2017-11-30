const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');
const connection = mongoose.createConnection('mongodb://root:root@ds131914.mlab.com:31914/moosebeat');
autoIncrement.initialize(connection);

// create a schema  unique: true 
const  reviewSchema = new Schema({
  
  title: String,
  username:{ type: String, required: true},
  artist_mbid: String,
  text: String,
  score: Number,
  created_at: Date
});

reviewSchema.plugin(autoIncrement.plugin,'Review', {
  startAt: 0
});
const Review = mongoose.model('Review', reviewSchema,'reviews');

// make this available to our users in our Node applications
module.exports = Review;