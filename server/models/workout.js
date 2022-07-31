const mongoose = require('mongoose');

const { Schema } = mongoose;

const workoutSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  },
  // created_by: {
  //   type: mongoose.Types.ObjectId,
  //   ref: 'User',
  //   required: true,
  // },
  exercises: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Exercise',
    }
  ]
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;