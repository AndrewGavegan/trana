const mongoose = require('mongoose');

const { Schema } = mongoose;

const muscleSchema = new Schema({
  name: { type: String }
})

const Muscle = mongoose.model('Muscle', muscleSchema);

module.exports = Muscle;