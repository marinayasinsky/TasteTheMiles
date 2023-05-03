const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema(
  {
    workoutType: {
      type: String,
      enum: ['easyRun', 'longRun', 'interval', 'tempoRun', 'rest'],
      required: true,
    },
    distance: {
      type: Number,
      default: Date.now(),
    },
    duration: {
      type: Number,
      default: Date.now(),
    },
   
  },
  { timestamps: true }
);

// Create the model from the schema and export it
const workout = mongoose.model('Workout', workoutSchema);

// Export
module.exports = workout;
