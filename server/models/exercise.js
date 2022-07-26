const mongoose = require('mongoose');

const { Schema } = mongoose;

const exerciseSchema = new Schema({
  name: {
    type: String,
    required: true
  }
})

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;