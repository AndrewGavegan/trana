const mongoose = require('mongoose');

const { Schema } = mongoose;

const workoutSchema = new Schema({
  userId: {
    type: String
  },
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
  exercises: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Exercise'
    }
  ],
  created_by: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;