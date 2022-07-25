const mongoose = require('mongoose');

const { Schema } = mongoose;

const exerciseSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  sets: {
    type: Number
  },
  repetitions: {
    type: Number
  },
  intensity: {
    type: Number,
    min: 0,
    max: 10
  },
  muscles: {
    type: String,
    enum: ['chest', 'back', 'shoulders', 'hamstrings', 'quads', 'abs', 'biceps', 'triceps']
  }
})

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;