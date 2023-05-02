const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  workoutType: {
    type: String,
    enum: ['easyRun', 'longRun', 'interval', 'tempoRun', 'rest'],
    required: true,
  },
  distance: {
    type: Number,
    required: function () {
      return this.workoutType !== 'rest';
    },
  },
  duration: {
    type: Number,
    required: function () {
      return this.workoutType !== 'rest';
    },
  },
  date: {
    type: Date,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  workoutWeek: {
    type: Number,
    required: true,
  },
  dayOfWeek: {
    type: String,
    required: true,
  },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Workout', workoutSchema);
